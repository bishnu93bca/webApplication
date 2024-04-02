<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{   

    
    
    /**
     * Show the Dashboard view.
     */
    public function show(): Response
    {
        return Inertia::render('UI/Home');
    }

    /**
     * Show the Home Form.
     */
    public function form(): Response
    {
        return Inertia::render('UI/Form');
    }

     public function store(Request $request): RedirectResponse
    {
    	
    	Log::info('-----');
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|',
            'fileupload' => 'required',
        ]);
        echo $request->name;
        
       return Response::json($request->name);

        // $user = User::create([
        //     'level_id' => 4,
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        // event(new Registered($user));

        // Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
