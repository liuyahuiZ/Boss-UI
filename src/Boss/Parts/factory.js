import React from 'react';
import { Input, Select, Selects, Textarea, DatePicker, Dynamic } from '../Components/';


export default function genInput(item) {
  switch (item.type) {
    case 'select':
      return (
        <Select
          {...item}
          ref={(r) => { this[`$$${item.key}`] = r; }}
          onChange={(e) => {
            if (item.change) {
              const doms = item.changeParams.map(key => this[`$$wrap-${key}`]);
              const inputDoms = item.changeParams.map(key => this[`$$${key}`]);
              item.change(e.target.value, ...doms, ...inputDoms);
            }
          }}
        />
      );
    case 'selects':
      return (
        <Selects
          {...item}
          ref={(r) => { this[`$$${item.key}`] = r; }}
          onChange={(e) => {
            if (item.change) {
              const doms = item.changeParams.map(key => this[`$$wrap-${key}`]);
              const inputDoms = item.changeParams.map(key => this[`$$${key}`]);
              item.change(e.target.value, ...doms, ...inputDoms);
            }
          }}
        />
      );
    case 'textarea':
      return (
        <Textarea
          {...item}
          ref={(r) => { this[`$$${item.key}`] = r; }}
        />
      );
    case 'date':
      return (
        <DatePicker
          {...item}
          isValidDate={(currentDate) => {
            const minTime = item.minTime;
            const maxTime = item.maxTime;
            const minDateObj = new Date(minTime);
            const maxDateObj = new Date(maxTime);

            if (minTime
                && +new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate())
                > +currentDate) {
              return false;
            }

            if (maxTime
                && +new Date(maxDateObj.getFullYear(), maxDateObj.getMonth(), maxDateObj.getDate())
                < +currentDate) {
              return false;
            }

            return true;
          }}
          ref={(r) => { this[`$$${item.key}`] = r; }}
        />
      );
    case 'dynamic':
      return (
        <Dynamic
          {...item}
          ref={(r) => { this[`$$${item.key}`] = r; }}
        />
      );
    default:
      if (item.type === 'number') {
        item.maxLengthShow = false;
      }
      return (
        <Input
          {...item}
          ref={(r) => { this[`$$${item.key}`] = r; }}
        />
      );
  }
}
