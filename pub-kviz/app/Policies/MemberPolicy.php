<?php

namespace App\Policies;
use App\Models\Member;
use App\Models\User;

class MemberPolicy
{
    public function update(User $user, Member $member)
    {
    return $user->id === $member->user_id;
    }
    
    public function destroy(User $user, Member $member)
    {
        return $user->id === $member->user_id;
    }
    
    public function insert(User $user)
    {
        return true; 
    }
}
