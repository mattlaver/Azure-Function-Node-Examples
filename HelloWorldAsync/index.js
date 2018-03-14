'use strict';

const response = async (name) => `hello ${name}`;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    context.res = {
      body: await response('world')
    };
   
    context.done();
};