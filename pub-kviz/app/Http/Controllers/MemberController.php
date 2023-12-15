<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\MemberResource;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function insert(Request $request)
    {
        $validator=Validator::make($request->all(),[ 
            'first_name'=>'required|string|max:50',
            'last_name'=>'required|string|max:50'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());

        }

        $member=Member::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'user_id'=>Auth::user()->id
        ]);

        return response()->json([
            'message'=>'Member created successfully',
            'member'=>new MemberResource($member),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Member $member)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Member $member)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $member_id)
    {
        //
        
        $member=Member::find($member_id);

        $member->first_name=$request->input('first_name');
        $member->last_name=$request->input('last_name');


        $member->update();
        return response()->json($member);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($member_id)
    {
        //

        
        $member = Member::find($member_id);
 
        if (is_null($member)) {
           
            return response()->json('Data not found', 404);
           
        }
            $member->delete();
            return response()->json($member);
    }
}
