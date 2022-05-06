import React from 'react';
import photoOne from '../../../images/solutions/solutions-1.jpg';
import photoTwo from '../../../images/solutions/solutions-2.jpg';
import photoThree from '../../../images/solutions/solutions-3.jpg';
import Solution from '../Solution/Solution';
const Solutions = () => {
    const solutions = [
        { id: 1, title: 'Automatic Sorting of Logistics Packages', description: 'The perfect choice for moving your business efficiently', img: photoOne },

        { id: 2, title: 'Warehouse and Distribution Intregration for Supplier', description: 'Cross-scenario-Full Proces-Digitalization', img: photoTwo },

        { id: 3, title: 'Intelligent Warehouing Systerm', description: 'Independent research with external intregration to create hig-quality integrated solutions', img: photoThree }
    ]
    return (
        <div className='bg-slate-100 py-12'>
            <div className='md:mx-24 mb-8'>
                <h1 className='text-3xl font-bold text-center mb-4'>Warehouse Extra Feature</h1>
                <div className='grid md:grid-cols-3 gap-12'>
                    {
                        solutions.map(solution => <Solution
                            key={solution.id}
                            solution={solution}
                        ></Solution>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Solutions;