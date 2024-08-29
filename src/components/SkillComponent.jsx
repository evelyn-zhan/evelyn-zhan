import React from 'react';

export default function SkillComponent({ logo, colorCode, skill, darkMode }) {
    return (
        <div className={`px-3.5 py-2 w-60 lg:w-52 flex flex-row items-center gap-x-2.5 border-solid border-[1px] rounded-md ${darkMode ? 'border-primary' : 'border-darker'}`}>
            <i className={`${logo} text-lg lg:text-xl text-[${colorCode}]`}></i>
            <span className="text-base">{skill}</span>
        </div>
    )
}