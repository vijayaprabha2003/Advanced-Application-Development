package com.techtitans.demo.service;

import java.security.Principal;

import com.techtitans.demo.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}