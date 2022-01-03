<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Images;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Categories/Index' , [
            'categories' => Categories::with('image')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Categories/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validating data from Form
        $request->validate([
            'title' => 'required|unique:categories,title'
        ],[
            'title.required' => 'يجب ادخال عنوان الفئة',
            'title.unique' => 'اسم الفئة المدخلة مستخدم بالفعل',
        ]);

        // saveing data from Form
        $categories = Categories::create([
            'title' => $request->title,
        ]);

        // check Image if exists and uploading then save
        if($request->file('img_url')){
            $img_url = $request->file('img_url')->store('Categories', 'public');
            $categories->image()->save(
                Images::make(['img_url' => $img_url])
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit($categories)
    {
        return Inertia::render('Categories/Edit', [
            'categories' => Categories::findOrFail($categories)->with('image')->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $categories)
    {
        // Validating data from Form
        $request->validate([
            'title' => 'required|unique:categories,title'
        ],[
            'title.required' => 'يجب ادخال عنوان الفئة',
            'title.unique' => 'اسم الفئة المدخلة مستخدم بالفعل',
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categories $categories)
    {
        //
    }
}
