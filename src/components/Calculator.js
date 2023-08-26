import React from 'react';

const makeCalculator = () => (
  <div className="main_container">
    <div className="count_display backgroundgrey div_height">

      <input name="myInput" className="count_display_filed  count_display" />

    </div>
    <div>
      <button type="submit" className="submit-btn">
        AC
      </button>
      <button type="submit" className="submit-btn">
        +/-
      </button>
      <button type="submit" className="submit-btn">
        %
      </button>
      <button type="submit" className="submit-btn orangebackground">
        ÷
      </button>
    </div>
    <div>
      <button type="submit" className="submit-btn">
        7
      </button>
      <button type="submit" className="submit-btn">
        8
      </button>
      <button type="submit" className="submit-btn">
        9
      </button>
      <button type="submit" className="submit-btn orangebackground">
        x
      </button>
    </div>
    <div>
      <button type="submit" className="submit-btn">
        4
      </button>
      <button type="submit" className="submit-btn">
        5
      </button>
      <button type="submit" className="submit-btn">
        6
      </button>
      <button type="submit" className="submit-btn orangebackground">
        -
      </button>
    </div>
    <div>
      <button type="submit" className="submit-btn">
        1
      </button>
      <button type="submit" className="submit-btn">
        2
      </button>
      <button type="submit" className="submit-btn">
        3
      </button>
      <button type="submit" className="submit-btn orangebackground">
        +
      </button>
    </div>
    <div>
      <button type="submit" className="submit-zero">
        0
      </button>
      <button type="submit" className="submit-btn">
        .
      </button>
      <button type="submit" className="submit-btn orangebackground">
        =
      </button>

    </div>

  </div>
);
export default makeCalculator;
