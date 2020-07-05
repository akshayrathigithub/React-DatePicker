import React, { useState, useRef } from "react"
import "./Calendar.style.css"
import styled from "styled-components"

export default function Calendar() {
  const Body = useRef(null)
  const [Direction, setDirection] = useState(false)
  const [EditWindow, setEditWindow] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")

  const Slide = (action) => {
    let slider = Body.current.firstElementChild
    console.log(Direction)
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
    if (!EditWindow) {
      slider.style.transition = "none"
      slider.style.transform = "translate3d(0%, 0%, 0px)"
      setTimeout(() => {
        slider.style.transition = "transform 0.8s ease-in-out"
      },3)
    } else {
      slider.style.transition = "none"
      slider.style.transform = "translate3d(-40%, 0%, 0px)"
      setTimeout(() => {
        slider.style.transition = "transform 0.8s ease-in-out"
      },3)
      console.log(123)
    }
    setEditWindow(!EditWindow)
  }
  const transitionChange = () => {
    let slider = Body.current.firstElementChild
    if (Direction) {
      slider.appendChild(slider.firstElementChild)
    } else {
      slider.prepend(slider.lastElementChild)
    }
    slider.style.transition = "none"
    slider.style.transform = "translate3d(-40%, 0%, 0px)"
    setTimeout(() => {
      slider.style.transition = "transform 0.8s ease-in-out"
    })
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
        <BodyDiv Height={EditWindow ? '16' : '70'} ref={Body}>
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
          ) : (
            <div className="BodyWrapper" onTransitionEnd={transitionChange}>
              <div className="BodyChild">
                <div className="Body_Header">
                  <div className="Body_Header_Date">
                    <p>Feb 1979</p>
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
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                </div>
              </div>
              <div className="BodyChild">
                <div className="Body_Header">
                  <div className="Body_Header_Date">
                    <p>Mar 1979</p>
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
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                </div>
              </div>
              <div className="BodyChild">
                <div className="Body_Header">
                  <div className="Body_Header_Date">
                    <p>April 1979</p>
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
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                </div>
              </div>
              <div className="BodyChild">
                <div className="Body_Header">
                  <div className="Body_Header_Date">
                    <p>May 1979</p>
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
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                </div>
              </div>
              <div className="BodyChild">
                <div className="Body_Header">
                  <div className="Body_Header_Date">
                    <p>June 1979</p>
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
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                </div>
              </div>
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
