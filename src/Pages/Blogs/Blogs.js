import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
const Blogs = () => {
    return (
        <div className='mx-2 md:mx-20 my-10'>
            <h1 className='text-center text-3xl text-blue-600'>What ours developer say?</h1>
            <div className='grid md:grid-cols-2 gap-16 mt-8'>
                <div className='border border-blue-400 rounded-lg shadow-lg'>
                    <h1 className='text-center text-3xl text-orange-600 mt-4'>When should you use nodejs and when should you use mongodb?</h1>
                    <div className='text-justify text-lg py-8'>
                        <p className='px-8'>NodeJs:Nodejs is javascript run time environment.Generelly we use it for backend.For small web site data analysis we use nodejs.
                        </p>
                        <p className='px-8 '>Mongodb:Mongodb is database.Here we store our data.It is nosql database.For nosql database we can easily add and update data from mongodb.It's user frinedly.
                        </p>
                    </div>
                </div>
                <div className='border border-blue-400 rounded-lg shadow-lg'>
                    <h1 className='text-center text-3xl text-orange-600 mt-4'>What is the purpose of jwt and how does it work?</h1>
                    <p className='text-justify p-8 text-lg'>
                        JWT is json web token.It is use for information security betwenn two  parties client and server side.Each jwt contains encoded json object,including a set of claims.A JWT differ have three parts,separated by dots and serialized useing 64.It's something like this:xxxx.yyyy.zzzz. Once decoded,you will get two JSON strings.
                    </p>
                </div>
            </div>
            <div className='border border-blue-400 rounded-lg shadow-lg my-4 py-4'>
                <h3 className='text-center text-3xl text-orange-600 mt-4'>What is the different between javascript and nodejs?</h3>
                <div className='grid md:grid-cols-2 gap-4 mt-4'>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Javascript</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Javascript is programming language.It run web browser with browser enginge.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It used for client side font end development.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It able to add html and play with dom.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It build with c++ and chrome browser it run with v8 engine.
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Nodejs</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Node.js is runtime enviroment of javascript.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It used for back end server database related work.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            But it can not to play with html.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            It build with c,c++ and javascript.
                        </p>
                    </div>
                </div>
            </div>
            <div className='border border-blue-400 rounded-lg shadow-lg my-4 py-4'>
                <h3 className='text-center text-3xl text-orange-600 mt-4'>What is the different between sql and nosql?</h3>
                <div className='grid md:grid-cols-2 gap-4 mt-4'>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Sql</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Sql is reational database management system.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            These databases have fixed or static or predefined schema.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            This databases best suited for complex queries.
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <h5 className='text-center text-xl mt-3 mb-4'>Nosql</h5>
                        <div className='border-b mb-4'></div>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            Nosql is no-reational or distributed database system.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            They have dynamic schema.
                        </p>
                        <p className='mb-2'>
                            <FontAwesomeIcon icon={faAnglesRight} className='mr-2'></FontAwesomeIcon>
                            This databases is not so good for complex queries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;