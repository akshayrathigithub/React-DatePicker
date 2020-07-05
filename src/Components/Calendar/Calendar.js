import React, { useRef } from "react"
import "./Calendar.style.css"
export default function Calendar() {
  const BodyWrapper = useRef(null)
  const Called = () => {
    let slider = BodyWrapper.current
    slider.style.transform = "translate3d(-20%, 0%, 0px)"
    slider.addEventListener("transitionend", () => {
      slider.appendChild(slider.firstElementChild)
      slider.style.transition = "none"
      slider.style.transform = "translate3d(0%, 0%, 0px)"
      setTimeout(() => {
        slider.style.transform = "transform 0.8s ease-in-out"
        console.log(slider.style.transform)
      })
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
            <div id="Header_Footer_Edit">
              <i className="fas fa-pen"></i>
            </div>
          </div>
        </div>
        <div className="Body">
          <div className="BodyWrapper" ref={BodyWrapper}>
            <div className="BodyChild">
              <div className="Body_Header">
                <div className="Body_Header_Date">
                  <p>December 1979</p>
                </div>
                <div className="Body_Header_DropDown">
                  <i onClick={Called} className="fas fa-chevron-down"></i>
                </div>
                <div className="Body_Header_Left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Body_Header_Right">
                  <i className="fas fa-chevron-right"></i>
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
                  <p>January 1979</p>
                </div>
                <div className="Body_Header_DropDown">
                  <i onClick={Called} className="fas fa-chevron-down"></i>
                </div>
                <div className="Body_Header_Left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Body_Header_Right">
                  <i className="fas fa-chevron-right"></i>
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
                  <p>Feb 1979</p>
                </div>
                <div className="Body_Header_DropDown">
                  <i onClick={Called} className="fas fa-chevron-down"></i>
                </div>
                <div className="Body_Header_Left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Body_Header_Right">
                  <i className="fas fa-chevron-right"></i>
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
                  <i onClick={Called} className="fas fa-chevron-down"></i>
                </div>
                <div className="Body_Header_Left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Body_Header_Right">
                  <i className="fas fa-chevron-right"></i>
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
                  <i onClick={Called} className="fas fa-chevron-down"></i>
                </div>
                <div className="Body_Header_Left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Body_Header_Right">
                  <i className="fas fa-chevron-right"></i>
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
        </div>
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
