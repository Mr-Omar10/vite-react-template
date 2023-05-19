import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { v4 as uuidv4 } from 'uuid';

//firebase
import { supabase } from './supabaseClient'


const AddProject = () => {

  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (avatarUrl) createProject()
  }, [avatarUrl])

  async function createProject(path) {
    try {
      const { data, error } = await supabase.storage.from('postImages').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${uuidv4()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage.from('postImages').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(event, filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }
   


  return (
    <>
    <nav className="flex justify-between p-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 " />
        </Link>
        <h4 className="font-montserrat ">Omar Huseynov</h4>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="font-montserrat  text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </Link>
        <Link
          to="/admin-4140mGK0M3"
          className="font-montserrat text-gray-500 bg-slate-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Admin
        </Link>
      </div>
    </nav>
    <div className="flex justify-center items-center h-screen">
      {/* {avatarUrl ? (
        <img
        src={avatarUrl}
        alt="Avatar"
        className="avatar image"
        style={{ height: size, width: size }}
      />
    ) : ( 
      <div className="avatar no-image h-5 w-5"  />
      )}
      <div className="h-5 w-5">
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div> */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-3xl font-bold">Add Project</h1> 
        <form className="flex flex-col justify-center items-center">
          <input type="text" placeholder="Title" className="border-2 border-gray-300 rounded-md p-2 m-2" />
          <input type="text" placeholder="Description" className="border-2 border-gray-300 rounded-md p-2 m-2" />
          {avatarUrl ? (
            <img  
              src={avatarUrl}
              alt="Avatar"
              className="avatar image"
              style={{ height: 100, width: 100 }}
            />
          ) : (
            <div className="avatar no-image h-5 w-5"  />
          )}
          <div className="h-5 w-5">
            <label className="button primary block" htmlFor="single">
              {uploading ? 'Uploading ...' : 'Upload'}
            </label>
            <input
              style={{
                visibility: 'hidden',
                position: 'absolute',
              }}
              type="file"
              id="single"
              accept="image/*"
              onChange={uploadAvatar}
              disabled={uploading}
            />
        
          </div>
          {/* <input type="text" placeholder="Image" className="border-2 border-gray-300 rounded-md p-2 m-2" /> */
          }
          <input type="text" placeholder="Link" className="border-2 border-gray-300 rounded-md p-2 m-2" />
          <button className="bg-slate-200 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded-md m-2">
            Add
          </button>
        </form>
      </div>
    </div>    
    </>
  )
}

export default AddProject