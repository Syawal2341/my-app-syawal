
const ItemService = ({
  title,
  subTitle
}) => {

  return (<>
    <div className="w-[310px] bg-white p-5 ">
      <div className="flex justify-center">
        <img src="image/coding.png" />
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <span className="text-[15px] text-[#767676]">{subTitle}</span>
      </div>
    </div>
  </>)
}

export default function Dashboard() {
  const myService = [
    { title: 'web development', subTitle: 'blog, e-commerce' },
    { title: 'uI/uX design', subTitle: 'Mobile app, website design' },
    { title: 'sound design', subTitle: 'Voice Over, Beat Making' },
    { title: 'game design', subTitle: 'Character Design, Props & Objects' },
    { title: 'photography', subTitle: 'portrait, product photography' },
    { title: 'advertising', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]

  return (
    <>
      <div className='flex w-full bg-white rounded-xl '>
        <div className="mt-10 flex-1 p-10">
          <div className="font-extrabold text-[48px] mt-10">
            <div>I&lsquo;m Mussyawal Baihaki</div>
            <div>
              <span className="text-[#FFB400]">Fullstack</span> Developer
              <> And </>
              <span className="text-[#FFB400]">Cyber</span> Security  
            </div>
          </div>
          <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
        </div>
        <div>
          <img src="image/avatar.png" />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-[32px] font-bold">My services</h2>
        <div className="flex justify-center text-[#767676]">
          <p className="w-1/2	">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-3 mt-10">
        {
          myService.
            map((item, key) => <ItemService
              key={key}
              title={item.title}
              subTitle={item.subTitle}
            />)
        }
      </div>
    </>
  );
}
