// ==================================================
// File: profile.service.ts
// Purpose: Profile business logic
// ==================================================

import {
    createProfile as createProfileRepository,
    findProfileByUserId,
    updateProfile as updateProfileRepository,
} from "../repositories/profile.repository";
import { UpdateProfilePreferencesDto } from "../dto/profile.dto";


// Create profile for new user
export const createProfile = async (
    userId: string
) => {

    const profile = await createProfileRepository({

        userId: userId as any

    });

    return profile;

};


// Get profile by user id
export const getProfile = async (
    userId: string
) => {

    const profile = await findProfileByUserId(userId);


    if (!profile) {

        throw new Error("Profile not found");

    }


    return profile;

};


// Update profile
export const updateProfile = async (
    userId: string,
    data: any
) => {

    const profile = await updateProfileRepository(
        userId,
        data
    );


    if (!profile) {

        throw new Error("Profile not found");

    }


    return profile;

};

// Update user favorite categories
export const updateProfilePreferences = async (
    userId: string,
    data: UpdateProfilePreferencesDto
) => {

    const { favoriteCategories } = data;

    if (
        favoriteCategories.length < 3 ||
        favoriteCategories.length > 5
    ) {

        throw new Error(
            "You must select between 3 and 5 categories"
        );

    }

    const profile = await updateProfileRepository(
        userId,
        {
            favoriteCategories
        }
    );

    if (!profile) {

        throw new Error("Profile not found");

    }

    return profile;

};