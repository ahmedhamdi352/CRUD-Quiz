import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const Answer = ({ answers, feedback_false, feedback_true }) => {

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((item) => item !== itemId));
    } else {
      setCheckedItems([itemId]);
    }
  };

  return (
    <div>
      <Collapse bordered={false} expandIcon={() => null} activeKey={checkedItems} >
        {answers.map((item) => (
          <Panel
            style={(checkedItems.includes(item.id) && !item.is_true) ? {
              background: 'red'
            } : {}}
            onChange={() => handleCheckboxChange(item.id)}
            key={item.id}
            header={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  style={{ marginRight: 10 }}
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {item.text}
              </div>
            }
          >
            <p>{item.is_true ? feedback_true : feedback_false}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Answer;
