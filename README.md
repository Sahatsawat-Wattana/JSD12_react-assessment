explain how and why you divided the app’s UI into components

 แยก component ออกเป็น NavBar Home และ Owner ก่อน จากนั้นเห็นถึงการปรากฏของปุ่มในทุกหน้า home ที่มีการกด จึงแยกออกมาเป็นอีก component หนึ่ง เพราะมีการใช้ซ้ำบ่อย

what state variables did you created and why?

สร้าง state variable ทั้งหมด 6 ตัว โดย isUserHome นำมาเพื่อแสดงหน้า USer Home และ isAdminHome นำมาแสดงหน้า Admin Home ItemList สร้างมาเพื่อเก็บข้อมูลี่ได้จาก API name,lastname,position สร้างมาเพื่อเก็บข้อมูลเพื่อส่งต่อไป API เนื่องจากเป็นตัวแปรที่มาจากการกรอกข้อมูล และส่งต่อข้อมูลที่มีการเแปลี่ยนแปลง


How did you manage these states? Was it via Passing Props or React Context, why? 

เนื่องจากออกแบบให้ทำทุกอย่างในหน้า Home และมี component ย่อยแค่ button เท่านั้น จึงใช้แค่ passing props จึงเพียงพอ

Explain how and why you used the useEffect hook?

นำมาใช้กับ fetch กับการเชื่อมต่อ api เพื่อส่งต่อข้อมูลหลังจากมีการ render UI component

Explain whether you could and why, you would use fetch() without using useEffect?

ถ้านำ fetch มาใช้แบบไม่มี useEffect สามารถใช้ได้กับ eventhandler function ให้ทุกการกดปุ่มของ user เป็นตัว trigger การ fetch แทนการใช้ useEffect ในการเปลี่ยนค่าได้ แต่ต้องทำให้ function เป็น asynchronus function ตามที่ได้ใช้ไปใน handledelete ที่ให้การกดปุ่ม delete เป็นตัว trigger

Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why? 

ควรเป็น asynchronus javascript เพื่อให้ render UI ส่วนอื่นๆ ได้ก่อนโดยไม่ต้องรอการส่งผ่านข้อมูลผ่าน API 