const categories = [
  {
    title: "Electrician",
    image: "https://images.unsplash.com/photo-1660330589693-99889d60181e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljaWFufGVufDB8fDB8fHww",
  },
  {
    title: "Plumber",
    image: "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Driver",
    image: "https://plus.unsplash.com/premium_photo-1677574622702-d93f29b3708b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRyaXZlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Carpenter",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600",
  },
  {
    title: "Mechanic",
    image: "https://plus.unsplash.com/premium_photo-1677009541474-1fc2642943c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVjaGFuaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Shop Helper",
    image: "https://imgs.search.brave.com/nMDj8xWHsG2BkGfbdhAPjrlR481GphICwX8-o6U67KM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/MzI3Nzk1MS9waG90/by9ncm91cC1vZi12/b2x1bnRlZXJzLXBy/ZXBhcmluZy1kb25h/dGlvbi1ib3hlcy13/aXRoLWNsb3RoZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5hTmRSaHdJM0kx/d2wyZ185SE0tQkVf/RGdISUc3TG5DdUUx/XzFUY3hGSXc9",
  },
  {
    title: "Welder",
    image: "https://plus.unsplash.com/premium_photo-1661963236181-9eb0c8d766e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VsZGVyfGVufDB8fDB8fHww",
  },
  {
    title: "Security Guard",
    image: "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Categories = () => {
  const list = [...categories, ...categories];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="slider">
          {list.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .slider{
          display:flex;
          gap:25px;
          width:max-content;
          animation:move 30s linear infinite;
        }

        .slider:hover{
          animation-play-state:paused;
        }

        .card{
          min-width:260px;
          background:#fff;
          border-radius:18px;
          overflow:hidden;
          box-shadow:0 8px 25px rgba(0,0,0,.15);
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-10px);
        }

        .card img{
          width:100%;
          height:180px;
          object-fit:cover;
        }

        .card h3{
          padding:18px;
          text-align:center;
          font-size:20px;
          font-weight:700;
        }

        @keyframes move{
          from{
            transform:translateX(0);
          }
          to{
            transform:translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;