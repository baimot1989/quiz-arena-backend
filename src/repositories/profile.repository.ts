// ==================================================
// File: profile.repository.ts
// Purpose: Database operations for Profile entity
// ==================================================

import { Profile, IProfile } from "../models/profile";


// Find profile by user id
export const findProfileByUserId = async (
    userId: string
): Promise<IProfile | null> => {

    return await Profile.findOne({
        userId
    });

};


// Create new profile
export const createProfile = async (
    profileData: Partial<IProfile>
): Promise<IProfile> => {

    const profile = new Profile(profileData);

    return await profile.save();

};


// Update profile
export const updateProfile = async (
    userId: string,
    updateData: Partial<IProfile>
): Promise<IProfile | null> => {

    return await Profile.findOneAndUpdate(
        {
            userId
        },
        updateData,
        {
            new: true
        }
    );

};