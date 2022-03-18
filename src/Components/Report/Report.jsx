import { useState } from 'react';
import { WASHERS, SERVICES } from '../../assets/arrs';
import PORT from '../../assets/config';
import ExcelJS from "exceljs";
import { createServices, createWashers, createOptions } from '../../assets/sort';
import cls from './Report.module.css'

function Report(props) {

  const [reportReq, setReportReq] = useState(
      {from:'',to:'',washer:props.userName, place:'All', service:'All'}
    )
  
  async function request() {
    (reportReq.washer !== 'All' && reportReq.washer === props.userName) 
    || (props.userName === 'Denis' &&  reportReq.washer !== 'All')
    || (props.userName === 'Sergey' &&  reportReq.washer !== 'All')
      ? props.setAppMode('COUNT')
      : props.setAppMode('REPORT')
    await fetch(PORT + 'report', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        ...reportReq
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.setCars(JSON.parse(data))
    });
  }
  async function requestExcel() {
      
      await fetch(PORT + 'report', {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          ...reportReq
        })
      })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        
        const workbook = new ExcelJS.Workbook();
        workbook.addWorksheet("sheet1");
        const worksheet = workbook.getWorksheet("sheet1");
        worksheet.columns = [
          { header: 'Auto', key: 'car', width: 10 },
          { header: 'Numero', key: 'number', width: 30 },
          { header: 'Palvelu', key: 'service', width: 30},
          { header: 'Paikka', key: 'place', width: 30}
        ];
        worksheet.addRows(JSON.parse(data));
          return workbook.xlsx.writeBuffer()})
      .then((uint8Array) =>{const blob = new Blob([uint8Array], { type: "application/octet-binary" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${reportReq.from}-${reportReq.to}.xlsx`;
        a.click();
        a.remove();
    })
  }
      
  return (
    <div className={cls.wrapper}>
      <form className={cls.form}>
        <div className={cls.inputWrapper}>
          <label className={cls.label}>От:</label>
          <input className={cls.input} 
                value={reportReq.from} 
                onChange={(e) => setReportReq({...reportReq, from:e.currentTarget.value})}
                type="date"/>
        </div>
        <div className={cls.inputWrapper}>
          <label className={cls.label}>До:</label>
          <input className={cls.input} 
                  value={reportReq.to}
                  onChange={(e) => setReportReq({...reportReq, to:e.currentTarget.value})}
                  type="date"/>
        </div>
        {props.userName === 'Sergey' || props.userName === 'Denis' 
          ? <><div className={cls.inputWrapper}>
              <label className={cls.label}>Мойщик:</label>
              <select className={cls.select} 
                      value={reportReq.washer}
                      onChange={(e)=>setReportReq({...reportReq, washer:e.currentTarget.value})}>
                  {createWashers([{name:'All'},...WASHERS],'All')}
              </select>
            </div>
            <div className={cls.inputWrapper}>
              <label className={cls.label}>Место:</label>
              <select className={cls.select}  
                      value={reportReq.place}
                      onChange={(e)=>setReportReq({...reportReq, place:e.currentTarget.value})}>
                  {createOptions(['All','K','V'],'All')}
              </select>
            </div>
          </>
          : null
        }
        
        <div className={cls.inputWrapper}>
          <label className={cls.label}>Вид:</label>
          <select className={cls.select} 
                  value={reportReq.service}
                  onChange={(e)=>setReportReq({...reportReq, service:e.currentTarget.value})}>
              {createServices([{latter:'All',name:''},...SERVICES],'All')}
          </select>
        </div>
        <div className={cls.buttonsWrapper}>
          <div className={cls.button}
              onClick={()=>{requestExcel()}}>Отчет
              </div>
        </div>
        <div className={cls.buttonsWrapper}>
          <div className={cls.button}
              onClick={()=>{request()}}>Просмотреть
              </div>
        </div>
      </form>
    </div>
  );
}
  

export default Report
