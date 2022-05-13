 let data = [
	{
    	img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_12.jpg', 
     		lyr: { oxy: '-50%, -50%' }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_14.jpg', 
     		lyr: { oxy: '0, calc(var(--hov)*-100%)', spr: 'var(--l)' }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_33.jpg', 
     		lyr: { oxy: '50%, -50%' }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_25.jpg', 
    		lyr: { raz: '45deg', fxy: +Math.sqrt(2).toFixed(3) }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_16.jpg', 
     		lyr: { fxy: +Math.sqrt(2).toFixed(3) }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_18.jpg', 
     		lyr: {}
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_13.jpg', 
     		lyr: { oxy: '-50%, 50%' }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_24.jpg', 
     		lyr: { oxy: '0, calc(var(--hov)*100%)', spr: 'var(--l)' }
     	},
     	{
     		img: 'https://assets.codepen.io/2017/17_05_a_amur_leopard_2.jpg', 
     		lyr: { oxy: '50%, 50%' }
     	}
     ];
     let n = data.length;
    
    body(style=`--m: ${Math.ceil(Math.sqrt(n))}`)
         for(let i = 0; i < n ; i++)
             let c = data[i], s = [];
             for(let p in c.lyr) { s.push(`--${p}: ${c.lyr[p]}`) }
            figure(style=s.join('; '))
                img(src=c.img)