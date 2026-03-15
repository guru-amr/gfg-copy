package com.gfg.club.dto;

import lombok.Data;

public class AuthDto {

    @Data
    public static class LoginRequest {
        private String username;
        private String password;
    }

    @Data
    public static class SignupRequest {
        private String username;
        private String email;
        private String password;
    }

    @Data
    public static class JwtResponse {
        private String token;
        private String username;
        private String email;

        public JwtResponse(String token, String username, String email) {
            this.token = token;
            this.username = username;
            this.email = email;
        }
    }
    
    @Data
    public static class MessageResponse {
        private String message;
        public MessageResponse(String message) {
            this.message = message;
        }
    }
}
