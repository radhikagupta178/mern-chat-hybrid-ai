import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`}>
          <span className='label-text text-violet-950'>Male</span>
          <input id="male" type="radio" className='radio border-slate-900'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange("male")}></input>
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer' ${selectedGender === 'female' ? "selected" : ""}`}>
          <span className='label-text text-violet-950'>Female</span>
          <input type="radio" id="female" className='radio border-slate-900'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange("female")}></input>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
