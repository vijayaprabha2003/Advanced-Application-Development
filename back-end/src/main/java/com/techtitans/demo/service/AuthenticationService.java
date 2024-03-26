package com.techtitans.demo.service;

import java.io.IOException;

import com.techtitans.demo.dto.request.LoginRequest;
import com.techtitans.demo.dto.request.RegisterRequest;
import com.techtitans.demo.dto.response.LoginResponse;
import com.techtitans.demo.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}