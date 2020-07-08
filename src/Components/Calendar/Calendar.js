import React, { useState, useRef, useEffect } from "react"
import "./Calendar.style.css"
import styled from "styled-components"

export default function Calendar() {
  const Body = useRef(null)
  const [Direction, setDirection] = useState(false)
  const [EditWindow, setEditWindow] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [MonthsInfo, setMonthsInfo] = useState([])
  const [CurrentMonthInd, setCurrentMonthInd] = useState(new Date().getMonth() - 2)
  const [MonthsList, setMonthsList] = useState(true)
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const DateMethod = (Ind) => {
    let monthsinfo = []
    let Index = CurrentMonthInd + Ind
    for (let i = 0; i < 5; i++) {
      let todayDate = new Date()
      todayDate.setMonth(Index + i)
      todayDate.setDate(1)
      let LastDate = new Date(todayDate.getFullYear(), Index + i + 1, 0).getDate()
      let StartingDay = todayDate.getDay()
      let MonthInd = todayDate.getMonth()
      let Year = todayDate.getFullYear()
      let Active
      if (new Date().getMonth() === MonthInd && new Date().getFullYear() === Year) {
        Active = true
      } else {
        Active = false
      }
      monthsinfo.push({ LastDate, StartingDay, MonthInd, Year, Active })
    }
    setMonthsInfo([...monthsinfo])
    setCurrentMonthInd(Index)
  }

  useEffect(() => {
    DateMethod(0)
  }, [])

  const Slide = (action) => {
    let slider = Body.current.firstElementChild
    if (action === "Forward") {
      slider.style.transform = "translate3d(-60%, 0%, 0px)"
      setDirection(true)
    } else {
      slider.style.transform = "translate3d(-20%, 0%, 0px)"
      setDirection(false)
    }
  }
  const DateChange = (e) => {
    setSelectedDate(e.target.value)
  }
  const EditCalled = () => {
    let slider = Body.current.firstElementChild
    slider.style.transition = "none"
    if (!EditWindow) {
      slider.style.transform = "translate3d(0%, 0%, 0px)"
    } else {
      slider.style.transform = "translate3d(-40%, 0%, 0px)"
    }
    setTimeout(() => {
      slider.style.transition = "transform 0.8s ease-in-out"
    }, 15)
    setEditWindow(!EditWindow)
  }
  const transitionChange = () => {
    let slider = Body.current.firstElementChild
    if (Direction) {
      DateMethod(1)
    } else {
      DateMethod(-1)
    }
    slider.style.transition = "none"
    slider.style.transform = "translate3d(-40%, 0%, 0px)"
    setTimeout(() => {
      slider.style.transition = "transform 0.8s ease-in-out"
    })
  }
  const Day = (e, Id) => {
    console.log(e.target, Id)
  }
  return (
    <div id="Calendar">
      <div className="ContentWrapper">
        <div className="Header">
          <div id="Header_Heading">
            <p>SELECT DATE</p>
          </div>
          <div id="Header_Footer">
            <div id="Header_Footer_Date">
              <p>Mon, July 20</p>
            </div>
            <div id="Header_Footer_Edit" onClick={EditCalled}>
              <i className={EditWindow ? "far fa-calendar" : "fas fa-pen"}></i>
            </div>
          </div>
        </div>
        <BodyDiv Height={EditWindow ? "16" : "60"} ref={Body}>
          {EditWindow ? (
            <div className="ManualDate">
              <div className="ManualDateWrapper">
                <div id="ManualDate_Label">
                  <p>Enter Date</p>
                </div>
                <div id="ManualDate_Input">
                  <input
                    placeholder="dd/mm/yy"
                    type="text"
                    onChange={DateChange}
                    value={selectedDate}
                  />
                </div>
              </div>
            </div>
          ) : MonthsList ? (
            <div className="YearsList">
              {[...Array(201)].map((day, i) => {
                return (
                  <div key={i} className="Years">
                    <div className="Year">
                      <p>{1900 + i}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="BodyWrapper" onTransitionEnd={transitionChange}>
              {MonthsInfo.map((child, ind) => {
                return (
                  <div className="BodyChild" key={ind}>
                    <div className="Body_Header">
                      <div className="Body_Header_Date">
                        <p>
                          {Months[child.MonthInd]} {child.Year}
                        </p>
                      </div>
                      <div className="Body_Header_DropDown">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                      <div onClick={() => Slide("Backward")} className="Body_Header_Left">
                        <i className="fas fa-chevron-left"></i>
                      </div>
                      <div className="Body_Header_Right">
                        <i onClick={() => Slide("Forward")} className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="Body_Days">
                      <div className="WeekDays">Sun</div>
                      <div className="WeekDays">Mon</div>
                      <div className="WeekDays">Tue</div>
                      <div className="WeekDays">Wed</div>
                      <div className="WeekDays">Thu</div>
                      <div className="WeekDays">Fri</div>
                      <div className="WeekDays">Sat</div>
                      {[...Array(child.StartingDay)].map((day, i) => {
                        return <div key={i} className="PrevMonthsDays"></div>
                      })}
                      {[...Array(child.LastDate)].map((day, i) => {
                        return (
                          <div key={i} className="dayWrapper">
                            <div
                              onClick={(e) => {
                                Day(e, i + 1)
                              }}
                              className={
                                child.Active && i === new Date().getDate() ? "day-active" : "day"
                              }
                            >
                              <p>{i + 1}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </BodyDiv>
        <div className="Footer">
          <div className="Footer_CancelBtn">
            <p>CANCEL</p>
          </div>
          <div className="Footer_OkBtn">
            <p>OK</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const BodyDiv = styled.div`
  width: 100%;
  height: ${(props) => props.Height}%;
  position: relative;
  overflow: hidden;
  transition: height 0.1s ease-in-out;
`
