export default function Home() {
  return (
    <div className="flex flex-col space-y-2  p-5 ">
      <details className="select-none open:text-white open:bg-indigo-400">
        {/* open:text-white : 펼쳤을 때 효과 주기 */}
        <summary className=" cursor-pointer">summary</summary>
        {/* 
         select-none :커서를 텍스트 선택모드로 바뀌지 않도록 함 
         cursor-pointer : 커서를 손가락 모양으로 바꿈 
         
         */}
        <span className=" selection:bg-indigo-600">show up</span>
        {/* 
        selection:bg-indigo-600 : 블록씌울 때 색상 설정 
        */}
      </details>

      <ul className=" list-disc marker:text-teal-500">
        {/* list-disc : 앞에 붙는 것 */}
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </ul>

      <input
        type="file"
        className=" file:cursor-pointer file:hover:text-purple-300 file:transition-colors file:border-0 file:rounded-md file:p-4 file:bg-red-300"
      />

      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Hello everyone!
      </p>
    </div>
  );
}
