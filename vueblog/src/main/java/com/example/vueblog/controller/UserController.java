package com.example.vueblog.controller;


import com.example.vueblog.entity.User;
import com.example.vueblog.service.UserService;
import com.example.vueblog.util.JsonResult;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 关注公众号：MarkerHub
 * @since 2022-10-24
 */
@RestController
@RequestMapping("/user")
public class UserController extends BaseController{

    @Autowired
    UserService userService;


    @RequiresAuthentication                   //需要登录的接口添加此注释
    @RequestMapping("index")
    public JsonResult<User> index(){
        User data = userService.getById(1);
        return new JsonResult<>(OK,data);
    }
                                                                                 //@RequestBody加入之后前端只能传json格式的数据过来
                                                                                 //不加上面的注解则是直接传过来参数
    @RequestMapping("save")
    public JsonResult<Void> save( @Validated @RequestBody User user){
        return new JsonResult<>(OK);
    }

}
