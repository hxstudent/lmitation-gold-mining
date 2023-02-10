package com.example.vueblog.controller;

import com.example.vueblog.service.ex.PasswordNotMatchException;
import com.example.vueblog.service.ex.ServiceException;
import com.example.vueblog.util.JsonResult;
import org.apache.shiro.ShiroException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpSession;

public class BaseController {
    public static final int OK=200;

    @ExceptionHandler({ShiroException.class, ServiceException.class, MethodArgumentNotValidException.class,IllegalArgumentException.class})
    public JsonResult<Void> handleException(Throwable e){

        JsonResult<Void> result = new JsonResult<Void>(e);

        if(e instanceof ShiroException){
            result.setState(401);
            result.setMessage("用户未登录或登录出现异常");
        }else if(e instanceof MethodArgumentNotValidException){
            result.setState(402);
            result.setMessage("实体校验异常");
        }else if(e instanceof IllegalArgumentException){
            result.setState(403);
            result.setMessage("Assert异常"+e.getMessage());
        }else if(e instanceof PasswordNotMatchException){
            result.setState(4002);
            result.setMessage("用户名或密码错误的异常");
        }

        return result;
    }

    protected final Integer getuidFromSession(HttpSession session){
        return Integer.valueOf(session.getAttribute("uid").toString());
    }

    protected final String getUsernameFromSession(HttpSession session){
        return session.getAttribute("username").toString();
    }
}
