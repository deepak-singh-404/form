import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Child from '../components/Child'
import axios from 'axios'


const totalPhase = [1,2,3,4,5]
const durationOfEachPhase = [4,5,6,4,2]

const Home = () => {
    const [planName, setPlaneName] = useState(null)
    const [phase, setPhase] = useState(null)
    const [phaseDuration, setPhaseDuration] = useState(null)
    const [total,setTotal] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [childArr, setChildArr] = useState([])




    const handleInputChange = (e) => {
        if (e.target.checked) {
            setIsChecked(true)
            setTotal(phase*phaseDuration)
            for (let i = 0; i < phase; i++){
                let obj = {
                    id : uuidv4(),
                    phaseName: "",
                    phaseFocus: "",
                    duration: "",
                    reprange: "",
                    loadrange: ""
                }
                childArr.push(obj)
            }
        }
    }


   

    const formhandler = async(e) => {
        e.preventDefault()

        try {
            const { data } = await axios({
                method: "Post",
                url: "http://localhost:5000/api/plan",
                data: {planName,totalPhase:phase, durationOfEachPhase: phaseDuration, total, phases: childArr}
            })
            if (data.success) {
                console.log("response", data)
                alert("data saved successfully")
                setChildArr([])
                setPhaseDuration(null)
                setPlaneName(null)
                setPhase(null)
                setTotal(0)



            }
          
            
        }
        catch (err) {
            console.log("err in posting data",err.message)
        }
    }

    //   this is end point/url for getting data , we have to give send id through params
    //    Get request
    //   url: "http://localhost:5000/api/plan/:id"


    const setPhaseName = (value, id) => {

        const newChild = [...childArr]
        let index = newChild.findIndex(obj =>
            obj.id === id
        )
        if (index !== -1) {
            newChild[index].phaseName= value
        }
        setChildArr(newChild)
    }

    const setPhaseFocus = (value, id) => {

        const newChild = [...childArr]
        let index = newChild.findIndex(obj =>
            obj.id === id
        )

        if (index !== -1) {
            newChild[index].phaseFocus = value
        }
        setChildArr(newChild)
    }

    const setDuration = (value, id) => {

        const newChild = [...childArr]
        let index = newChild.findIndex(obj =>
            obj.id === id
        )

        if (index !== -1) {
            newChild[index].duration = value
        }
        setChildArr(newChild)
    }

    const setReprange = (value, id) => {

        const newChild = [...childArr]
        let index = newChild.findIndex(obj =>
            obj.id === id
        )

        if (index !== -1) {
            newChild[index].reprange = value
        }
        setChildArr(newChild)
    }

    const setLoadrange = (value, id) => {

        const newChild = [...childArr]
        let index = newChild.findIndex(obj =>
            obj.id === id
        )

        if (index !== -1) {
            newChild[index].loadrange = value
        }
        setChildArr(newChild)
    }




   




    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <form onSubmit={formhandler}>
                            <div className="form-group">
                                <label htmlFor="planNameId">Plan Name</label>
                                <input onChange={(e)=>setPlaneName(e.target.value)} type="text" className="form-control" id="planNameId" placeholder="Client Full Name" />
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="totalPhaseId">Total Phase</label>
                                        <select onChange={(e) => setPhase(e.target.value)} className="form-control">
                                            <option>Input</option>
                                            {totalPhase.map((val, index) =>
                                                <option key={index} value={val}>{val}</option>
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="totalPhaseId">Duration of each phase</label>
                                        <select onChange={(e) => setPhaseDuration(e.target.value)} className="form-control">
                                            <option>Input</option>
                                            {durationOfEachPhase.map((val, index) =>
                                                <option key={index} value={val}>{val}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="totalPhaseId">Total</label>
                                        <input  className="form-control" id="planNameId" value={total} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-check mt-4 ml-3">
                                        <input type="checkbox" defaultChecked={false} onChange={handleInputChange} className="form-check-input" id="exampleCheck1" />
                                        <label htmlFor="exampleCheck1">Custom phases</label>
                                        </div>
                                </div>
                            </div>
                            <hr className="my-5" />
                            
                            {isChecked && childArr.map((obj,index) =>
                                <Child id={obj.id} key={index} setPhaseName={setPhaseName} setPhaseFocus={setPhaseFocus}
                                    setDuration = {setDuration} setReprange={setReprange} setLoadrange = {setLoadrange}
                                />
                            )}

                            <div className="row mt-5">
                                <div className="col-2">
                                    <button type="button" className="btn btn-light btn-lg">Back</button>
                                </div>
                                <div className="col-8">

                                </div>
                                <div className="col-2">
                                    <button type="submit" className="btn btn-primary btn-lg">Add Faculty</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
           

        </>
    )
}

export default Home
