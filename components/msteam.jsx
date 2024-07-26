"use client"

const MSTEAM = () => {

  const datas = [
    {
      id: "1",
      img: "/msteam/1.avif",
      title: "Basic call control",
      des: "Connect with your team, customers, and partners with voice and video calls from a Teams chat, the Calls app, or the public switched telephone network (PSTN).",
    },
    {
      id: "1-1",
      img: "/msteam/1-1.avif",
      title: "Make and answer calls",
      des: "Make one-on-one or group calls directly from a chat or use the dial pad to call a phone number.",
    },
    {
      id: "1-2",
      img: "/msteam/1-2.avif",
      title: "Merge calls",
      des: "Bring someone else into your one-on-one or group call with the merge function.",
    },
    {
      id: "1-3",
      img: "/msteam/1-3.avif",
      title: "Transfer and ring back",
      des: "Transfer a call to a colleague and select ring back if there’s no answer.",
    },
    {
      id: "1-4",
      img: "/msteam/1-4.avif",
      title: "Transfer calls between devices",
      des: "Whether on the go or at a desk, at home, or in the office, transfer calls from one device to another while on a call.",
    },
    {
      id: "1-5",
      img: "/msteam/1-5.avif",
      title: "Access your voicemail",
      des: "Access, listen to, and review your voicemails using playback controls, voicemail summary, and transcripts.",
    },
    {
      id: "1-6",
      img: "/msteam/1-6.avif",
      title: "Transcribe your calls",
      des: "Transcribe calls no matter where you are. Focus on what’s being said, knowing you’ll be able to go back to the recording and transcription afterwards.",
    },
    {
      id: "1-7",
      img: "/msteam/1-7.avif",
      title: "Call on the go with Apple Carplay",
      des: "Join calls and meetings using your vehicle’s built-in controls or hands-free with Siri.",
    },
    {
      id: "2",
      img: "/msteam/2.avif",
      title: "Advanced call control",
      des: "Meet the needs of your evolving business with modern phone capabilities.",
    },
    {
      id: "2-1",
      img: "/msteam/2-1.avif",
      title: "Auto attendant",
      des: "Let people call your organization and navigate a menu system to speak to the right department, call queue, person, or an operator.",
    },
    {
      id: "2-2",
      img: "/msteam/2-2.avif",
      title: "Call queues",
      des: "Route callers to people in your organization who can help with a particular issue or question.",
    },
    {
      id: "2-3",
      img: "/msteam/2-3.avif",
      title: "Voice-enabled channels",
      des: "Collaborate and share information within the channel while taking calls in the call queue.",
    },
    {
      id: "2-4",
      img: "/msteam/2-4.avif",
      title: "Screen pop",
      des: "Automatically display information via web browser window when an incoming call is answered by a call queue agent.",
    },
    {
      id: "2-5",
      img: "/msteam/2-5.avif",
      title: "Copilot in Teams Phone",
      des: "Add generative AI capabilities to phone calls to get real-time summarization and insights.",
    },
    {
      id: "3",
      img: "/msteam/3.avif",
      title: "PSTN calling",
      des: "Make phone calls using PSTN connectivity options combined with the Teams Phone system.",
    },
    {
      id: "3-1",
      img: "/msteam/3-1.avif",
      title: "Operator Connect",
      des: "Manage your PSTN calling and session border controllers (SBCs) with participating operators in the Microsoft Operator Connect program.",
    },
    {
      id: "3-2",
      img: "/msteam/3-2.avif",
      title: "Teams Phone Mobile",
      des: "Seamlessly integrate your users' mobile identities with Teams. Assign a single number and implement a solution that works across network and devices.",
    },
    {
      id: "3-3",
      img: "/msteam/3-3.avif",
      title: "Direct Routing",
      des: "Connect your SBCs to Teams Phone to use your own PSTN operator.",
    },
    {
      id: "3-4",
      img: "/msteam/3-4.avif",
      title: "Microsoft Teams Calling Plans",
      des: "Take advantage of this all-in-the-cloud solution with Microsoft as your PSTN operator.",
    },
    {
      id: "4",
      img: "/msteam/4.avif",
      title: "Contact center",
      des: "Support customer interaction work streams, using Teams as the hub for internal and external customer connections.",
    },
    {
      id: "4-1",
      img: "/msteam/4-1.avif",
      title: "Microsoft Digital Contact Center Platform",
      des: "Quickly set up phone systems for agents to assist customers on a scalable platform built, owned, and operated by Microsoft.",
    },
    {
      id: "4-2",
      img: "/msteam/4-2.avif",
      title: "Microsoft Teams Calling Plans",
      des: "Take advantage of this all-in-the-cloud solution with Microsoft as your PSTN operator.",
    },
    {
      id: "5",
      img: "/msteam/5.avif",
      title: "Devices",
      des: "Experience instant, high-quality audio and video communication everywhere you work with seamless transitions across devices.",
    },
    {
      id: "5-1",
      img: "/msteam/5-1.avif",
      title: "Desk phones and Teams displays",
      des: "Make and receive calls from devices certified for use with Teams, including intuitive screens and controls to enhance the Teams calling experience.",
    },
    {
      id: "5-2",
      img: "/msteam/5-2.avif",
      title: "Headsets",
      des: "Choose from a variety of headsets certified for Teams—wired, Bluetooth, over the ear, or on the ear—to suit every preference or need.",
    },
    {
      id: "5-3",
      img: "/msteam/5-3.avif",
      title: "Speakerphones",
      des: "Connect with USB-enabled or Bluetooth-enabled speakerphone options to easily scale audio based on the room size and number of meeting participants.",
    },
  ];

  function handleClickMenu(e) {
    e.preventDefault();
    removeAll();
    document.getElementById("Tab"+e.currentTarget.getAttribute('data-id')).classList.add("menu-dropdown-show");
    getData(e.currentTarget.getAttribute('data-id'));
  };

  function removeAll(){
    document.getElementById("Tab1").classList.remove("menu-dropdown-show");
    document.getElementById("Tab2").classList.remove("menu-dropdown-show");
    document.getElementById("Tab3").classList.remove("menu-dropdown-show");
    document.getElementById("Tab4").classList.remove("menu-dropdown-show");
    document.getElementById("Tab5").classList.remove("menu-dropdown-show");
  }

  function clickSubMenu(e){
    e.preventDefault();
    getData(e.currentTarget.getAttribute('data-id'));
  }

  function getData(id){
    document.getElementById("Image").src = datas.find(x => x.id == id).img;
    document.getElementById("Title").innerText = datas.find(x => x.id == id).title;
    document.getElementById("Des").innerText = datas.find(x => x.id == id).des;
  }

  return (
    <div className="pt-32 pb-16 px-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          Simplified, enterprise-grade calling in Microsoft Teams
        </h1>
        {/* CONTENT */}
        <div className="max-w-7xl grid grid-cols-12 py-16">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-4">
            <ul className="menu rounded-none p-0">
              <li>
                <span
                  onClick={handleClickMenu}
                  data-id="1"
                  className="menu-dropdown-toggle bg-secondary text-white"
                >
                  Basic call control
                </span>
                <ul id="Tab1" className="menu-dropdown menu-dropdown-show">
                  <li>
                    <a onClick={clickSubMenu} data-id="1-1">Make and answer calls</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-2">Merge calls</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-3">Transfer and ring back</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-4">Transfer calls between devices</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-5">Access your voicemail</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-6">Transscribe your calls</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="1-7">Call on the go with Apple Carplay</a>
                  </li>
                </ul>
              </li>
              <li>
                <span
                  onClick={handleClickMenu}
                  data-id="2"
                  className="menu-dropdown-toggle bg-secondary text-white"
                >
                  Advance call control
                </span>
                <ul id="Tab2" className="menu-dropdown">
                  <li>
                    <a onClick={clickSubMenu} data-id="2-1">Auto attendant</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="2-2">Call quenes</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="2-3">Voice-enabled channels</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="2-4">Screen pop</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="2-5">Copilot in Teams Phone</a>
                  </li>
                </ul>
              </li>
              <li>
                <span
                  onClick={handleClickMenu}
                  data-id="3"
                  className="menu-dropdown-toggle bg-secondary text-white"
                >
                  PSTN calling
                </span>
                <ul id="Tab3" className="menu-dropdown">
                  <li>
                    <a onClick={clickSubMenu} data-id="3-1">Operator Connect</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="3-2">Teams Phone Mobile</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="3-3">Direct Routing</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="3-4">Microsoft Teams Calling Plans</a>
                  </li>
                </ul>
              </li>
              <li>
                <span
                  onClick={handleClickMenu}
                  data-id="4"
                  className="menu-dropdown-toggle bg-secondary text-white"
                >
                  Contact center
                </span>
                <ul id="Tab4" className="menu-dropdown">
                  <li>
                    <a onClick={clickSubMenu} data-id="4-1">Microsoft Digital Contact Center Platform</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="4-2">Contact center partner integrations</a>
                  </li>
                </ul>
              </li>
              <li>
                <span
                  onClick={handleClickMenu}
                  data-id="5"
                  className="menu-dropdown-toggle bg-secondary text-white"
                >
                  Devices
                </span>
                <ul id="Tab5" className="menu-dropdown">
                  <li>
                    <a onClick={clickSubMenu} data-id="5-1">Desk phones and Teams displays</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="5-2">Headsets</a>
                  </li>
                  <li>
                    <a onClick={clickSubMenu} data-id="5-3">Speakerphones</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* RIGHT */}
          <div className="col-span-12 md:col-span-8">
            <div className="card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img id="Image"
                  src="/msteam/1.avif"
                  alt=""
                  style={{ width: '800px'}}
                />
              </figure>
              <div className="card-body">
                <h2 id="Title" className="card-title">Make and answer calls</h2>
                <p id="Des">Make one-on-one or group calls directly from a chat or use the dial pad to call a phone number.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSTEAM;