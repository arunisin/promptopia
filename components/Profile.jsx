import React from 'react'
import PromptCard from './PromptCadr'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient"> {name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((ele) => (
          <PromptCard
            key={ele._id}
            post={ele}
            handleEdit={() => handleEdit && handleEdit(ele)}
            handleDelete={() => handleDelete && handleDelete(ele)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile
