// ==================================================
// File: user.dto.ts
// Purpose:
// Defines Data Transfer Objects (DTOs) used for user-related operations.
//
// DTOs describe the shape of data that moves between the client
// and the backend application.
// ==================================================

// Data received when creating a new user
export interface RegisterUserDto {

    username: string;
    email: string;
    password: string;

}

// Data received when user logs in
export interface LoginUserDto {

    email: string;
    password: string;

}

// Data returned to client
// We never return password information
export interface UserResponseDto {

    id: string;
    username: string;
    email: string;

}