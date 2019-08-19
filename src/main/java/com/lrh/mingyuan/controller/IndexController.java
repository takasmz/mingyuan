package com.lrh.mingyuan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index(){
        return "home";
    }

    @RequestMapping({"/view/{common}/{page}","/view/{page}"})
    public String view(@PathVariable("page") String page, @PathVariable("common") String common){
        if(common == null || "".equals(common)){
            return page;
        }
        return "common/" + page;
    }
}
