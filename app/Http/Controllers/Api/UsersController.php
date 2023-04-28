<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Education;
use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;
use Illuminate\Support\Facades\DB;


class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $users = DB::table('users')
        ->leftJoin('education', 'users.education_id', '=', 'education.id')
        ->leftJoin('cities', 'users.city_id', '=', 'cities.id');

        if(isset($request->all()['filter']))
        {
            // Применение фильтра для выборки
            $param_education = $request->all()['education'];
            $users = $users->where('education.name', $param_education);
        }

        $users = $users->select(['users.id', 'users.name', 'cities.name AS city', 'education.name AS education'])->get();

        return $users->collect();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $education = Education::where('name', $request->all()['education'])->get();
        if (count($education) > 0) { 
            $result = User::where('id', $request->id)->update(['education_id' => $education[0]['id']]);
            if ($result) return 'true';
        }

        return 'false';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
