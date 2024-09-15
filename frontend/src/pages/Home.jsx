import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
    return (
        <div className='flex-1'>
            <section className='container mx-auto flex flex-col items-center py-32'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold'>What Do You Need Help With?</h1>
                    <p className='text-xl font-light py-6'>Please Choose From an Option Below</p>
                </div>
                <div className='flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-3 px-4'>
                    <Link to='/new-ticket' className='btn btn-primary rounded-xl btn-block sm:w-auto flex-1 sm:flex-grow-0 sm:flex-none flex-nowrap px-5'>
                        <FaQuestionCircle/>
                        Create Ticket
                    </Link>
                    <Link to='/tickets' className='btn btn-outline btn-primary rounded-xl btn-block sm:w-auto flex-1 sm:flex-grow-0 sm:flex-none flex-nowrap px-5'>
                        <FaTicketAlt/>
                        View Tickets
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home