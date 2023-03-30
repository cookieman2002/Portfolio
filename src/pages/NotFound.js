import { Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NotFound = () => {
    return ( <div className="flex items-center text-text flex-col justify-center w-[100%] h-[100%] absolute">
        <motion.span
        className="inline-block text-elevated"
        initial={{ opacity: 0, y: 70 }}
        animate={{
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                type: 'spring',
                stiffness: 500,
                damping: 50,
                opacity: {
                    delay: 0.9,
                },
            },
        }}
        >
        <Frown size={50}/>
        </motion.span>
    <motion.h1 className='text-4xl font-bold text-elevated mb-4 flex'>
				<motion.span
					className='inline-block'
					initial={{ opacity: 0, y: 48 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.4,
							type: 'spring',
							stiffness: 500,
							damping: 50,
							opacity: {
								delay: 0.3,
							},
						},
					}}
				>
					4
				</motion.span>
				<motion.span
					className='inline-block'
					initial={{ opacity: 0, y: 48 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.6,
							type: 'spring',
							stiffness: 500,
							damping: 50,
							opacity: {
								delay: 0.5,
							},
						},
					}}
				>
					0
				</motion.span>
				<motion.span
					className='inline-block'
					initial={{ opacity: 0, y: 48 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.8,
							type: 'spring',
							stiffness: 500,
							damping: 50,
							opacity: {
								delay: 0.7,
							},
						},
					}}
				>
					4
				</motion.span>
			</motion.h1>
<h1 className="text-4xl" >Not Found</h1>
<Link to="/" >  Go to main Page</Link>
</div> );
}
 
export default NotFound;