import React, { useState } from 'react'
import './../css/search.css'

export default function Search({ handleSearch }) {
    const [searchText, setSearchText] = useState('');


    const handleClick = (e)=>{
        e.preventDefault()
        handleSearch(searchText);
    }
    return (
        <div>
            <div className="search-bar mt-5 mx-5 p-3 p-lg-1 pl-lg-4 rtl">
                <form action="#">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-8 d-flex align-items-center form-group ">
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control border-0 shadow-0 mt-2 mx-4" type="text" name="search" placeholder="فیلم مورد نظر شما چیست؟" />
                        </div>

                        <div className="col-lg-2 p-0 px-4">
                            <button onClick={(e) => handleClick(e)} className="btn btn-primary btn-block rounded  h-100 p-0" type="submit">جستجو</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
