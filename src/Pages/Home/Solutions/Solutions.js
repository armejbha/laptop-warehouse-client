import React from 'react';
import photoOne from '../../../images/solutions/solutions-1.jpg';
import photoTwo from '../../../images/solutions/solutions-2.jpg';
// import photoThree from '../../../images/solutions/solutions-3.jpg';
import Solution from '../Solution/Solution';
const Solutions = () => {
    const solutions = [
        { id: 1, title: 'Automatic Sorting of Logistics Packages', description: 'The perfect choice for moving your business efficiently', img: photoOne },

        { id: 2, title: 'Automatic Sorting of Logistics Packages', description: 'The perfect choice for moving your business efficiently', img: photoTwo },

        { id: 3, title: 'Automatic Sorting of Logistics Packages', description: 'The perfect choice for moving your business efficiently', img: photoTwo }
    ]
    return (
        <div className='mx-24 mb-8'>
            <h1 className='text-3xl'>More Solutions</h1>
            <div className='grid grid-cols-3 gap-12'>
                {
                    solutions.map(solution => <Solution
                        key={solution.id}
                        solution={solution}
                    ></Solution>)
                }
            </div>
        </div>
    );
};

export default Solutions;