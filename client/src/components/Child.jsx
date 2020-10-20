import React from 'react'

const repRanges = ["1 wks", "2 wks", "3 wks", "4 wks", "5 wks"]

const Child = ({setPhaseName, setPhaseFocus, setDuration, setReprange, setLoadrange,id}) => {

    return (
        <>
        <div className="row">
            <div className="col-5">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="phaseNameId">Phase Name</label>
                            <input onChange={(e)=>setPhaseName(e.target.value,id)} type="text" className="form-control" id="phaseNameId" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="phaseFocusId">Phase Focus</label>
                                <input onChange={(e) => setPhaseFocus(e.target.value,id)} type="text" className="form-control" id="phaseFocusId" />
                        </div>
                    </div>
              </div>
            </div>
            <div className="col-1">

            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="durationId">Duration</label>
                                <select onChange={(e) => setDuration(e.target.value,id)} id="durationId" className="form-control">
                                <option>Input</option>
                                {repRanges.map((val, index) =>
                                    <option key={index} value={val}>{val}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="repRangeId">Rep range</label>
                                <input onChange={(e) => setReprange(e.target.value,id)} type="text" className="form-control" id="repRangeId" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="roadRangeId">Load Range</label>
                                <input  onChange={(e) => setLoadrange(e.target.value,id)} type="text" className="form-control" id="roadRangeId" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </>
    )
}

export default Child

