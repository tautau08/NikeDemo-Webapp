import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return(
    <section
        id='spacial-offer'
        className='flex justify-wrap items-center 
        max-xl:flex-col-reverse gap-10 w-full max-container'
      >
        <div className="flex-1">
        <img src={offer } width={773}
        height={687}
        className="object-contain w-full"/>
        </div>
      <div className='flex flex-1 flex-col'>
          <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
            
            <span className='text-coral-red'> Special </span> Offers
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          🔥 Don't Miss Out! 🔥 Shop the 
          Special Offer Segment on Nike's
           Website Now! 💥 Get exclusive deals on your favorite Nike gear,
           from shoes to apparel and more! 
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
          Limited time only, so hurry and grab your favorites before they're gone! Visit Nike's website today! 🏃💨 #JustDoIt
          </p>
          <div className='mt-10 flex flex-wrap gap-4'>
            <Button label='Shop Now'  />
            <Button className='mt-4'
            label='Learn More'
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
             textColor="text-slate-gray"
             />
          </div>
        </div>
  
        
    </section>
    )
}

export default SpecialOffer