function HeroStats() {
  const stats = [
    { title: 'Revenue Gained', value: '$1bn' },
    { title: 'Projects', value: '2,000+' },
    { title: 'Industry Awards', value: '5' },
    { title: 'Years of Experience', value: '100+' },
  ]
  
  return (
    <div className="grid gap-4 md:grid-cols-4 grid-cols-2">

      {stats.map((stat) =>(
        <div key={stat.title} className="text-center py-8 transition transform hover:rotate-2">
          <h2  className="text-4xl md:text-5xl font-bold">{stat.value}</h2>
          <p className="text-gray-700">{stat.title}</p>
        </div>
      ))}


    </div>
  );
}

export default HeroStats;
