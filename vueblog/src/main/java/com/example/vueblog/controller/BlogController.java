package com.example.vueblog.controller;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.vueblog.entity.Blog;
import com.example.vueblog.service.BlogService;
import com.example.vueblog.util.JsonResult;
import com.example.vueblog.util.ShiroUtil;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 关注公众号：MarkerHub
 * @since 2022-10-24
 */

@RestController
@RequestMapping("blog")
public class BlogController extends BaseController {

    @Autowired
    BlogService blogService;

    //ShiroUtil.getProfile().getId()相当于之前通过session找id

    @RequestMapping({"","/"})
    public JsonResult<IPage> list(@RequestParam(defaultValue = "1") Integer currentPage){

        Page page = new Page(currentPage,5);
        IPage pageData = blogService.page(page,new QueryWrapper<Blog>().orderByDesc("created"));

        return new JsonResult<IPage>(OK,pageData);
    }


    @RequestMapping("{id}/detail")
    public JsonResult<Blog> detail(@PathVariable(name = "id") Long id){
        Blog blog = blogService.getById(id);
        Assert.notNull(blog,"该博客已被删除");

        return new JsonResult<>(OK,blog);
    }

    @RequiresAuthentication
    @RequestMapping("edit")
    public JsonResult<Blog> edit(@Validated @RequestBody Blog blog){

        Blog temp = null;
        if(blog.getId()!=null){
            temp = blogService.getById(blog.getId());
            Assert.isTrue(temp.getUserId().longValue() == ShiroUtil.getProfile().getId().longValue(),"没有权限编辑");
        }else {
            temp = new Blog();
            temp.setUserId(ShiroUtil.getProfile().getId());
            temp.setCreated(new Date());
            temp.setStatus(0);
        }

        BeanUtil.copyProperties(blog,temp,"id","userId","created","status");
        blogService.saveOrUpdate(temp);

        return new JsonResult<>(OK,blog);
    }
}
