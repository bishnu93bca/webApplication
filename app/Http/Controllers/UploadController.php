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
use Illuminate\Http\UploadedFile;;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Model\Image;

use App\Http\Controllers\Controller;
use App\Models\Images;




class UploadController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function show(): Response
    {
       
        return Inertia::render('UI/Upload');
    }

    /**
     * Update the user's profile information.
     */
    public function add(Request $request): RedirectResponse
    {
        $this->log = Log::channel('product-update');
        $this->log->info('Product Update for ');
        $file = $request->file('avatar');




        if($request->has('avatar')){
            $file = $request->file('avatar');
            $name = $file->hashName(); // Generate a unique, random name...
            $extension = $file->extension(); 

            // // Public Folder
            // $request->file->move(public_path('images'), $name);
            $imageName =time().'.'.$extension;
            $file->move('images/',$imageName);
             Images::create(['name'=>$imageName]);
            //return Response()->json(['success'=>'Uploaded successfully']);
        }
         return Redirect::to('/upload');
        //return redirect('dashboard')->with('status', 'Profile updated!');

    }
}