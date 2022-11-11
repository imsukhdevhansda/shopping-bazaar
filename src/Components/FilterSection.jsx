import React from 'react'
import style from "../Styles/men.module.css";

function FilterSection({title,options}) {
  return (
    <div className={style.filterCategory}>
      <span className={style.categoryHead}> {title}</span>

      {options &&
        options.map((item, id) => {
          return (
            <label className={style.categoryItem} key={id}>
              <input type="checkbox" className={style.categoryInput} />
              <span className={style.categoryItemTitle}>{item}</span>
            </label>
          );
        })}
    </div>
  );
}

export default FilterSection