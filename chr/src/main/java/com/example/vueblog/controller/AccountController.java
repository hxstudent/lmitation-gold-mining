package com.example.vueblog.controller;

import cn.hutool.crypto.SecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.vueblog.entity.User;
import com.example.vueblog.service.UserService;
import com.example.vueblog.service.ex.PasswordNotMatchException;
import com.example.vueblog.util.JsonResult;
import com.example.vueblog.util.JwtUtils;
import com.example.vueblog.vo.LoginVO;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class AccountController extends BaseController{

    @Autowired
    UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    @RequestMapping("login")
    public JsonResult<User> login(@Validated @RequestBody LoginVO loginVO, HttpServletResponse response){

        User data = userService.getOne(new QueryWrapper<User>().eq("username",loginVO.getUsername()));
        Assert.notNull(data,"用户不存在");

        if(!data.getPassword().equals(SecureUtil.md5(loginVO.getPassword()))){
            System.err.println("有错误");
            throw new PasswordNotMatchException("用户密码错误");
        }

        String jwt = jwtUtils.generateToken(data.getId());

        response.setHeader("Authorization", jwt);
        response.setHeader("Access-control-Expose-Headers", "Authorization");


        return new JsonResult<>(OK,data);

    }

    @RequiresAuthentication
    @RequestMapping("logout")
    public JsonResult<Void> logout(){
        SecurityUtils.getSubject().logout();
        return new JsonResult<>(OK);
    }

}
