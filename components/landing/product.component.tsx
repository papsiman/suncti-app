import { IContent } from '@/app/db';
import { useSession } from 'next-auth/react';
import React from 'react'
import ProductDel from './product.del';
import ProductEdit from './product.edit';
import ProductAdd from './product.add';

export default function ProductComponent({products, setRefresh}:any) {
    
  const { data: session } = useSession();
  if (session?.user?.name) {
    return (
      <>
        <details className="">
          <summary className="mt-[4px] text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600">
            Product
          </summary>
          <ul className="w-96 z-10" style={{marginTop:'24px'}}>
            { products.length > 0 && (products.map((product: IContent) => {
              return (
                <div key={product?.Id} className="h-14">
                  <li className="grid grid-cols-12 items-center gap-2">
                    <div className="col-span-2 p-0 justify-center">
                      <ProductDel content={product} setRefresh={setRefresh}/>
                    </div>
                    <div className="col-span-2 p-0 justify-center">
                      <ProductEdit content={product} setRefresh={setRefresh}/>
                    </div>
                    <div
                      className="col-span-8 p-0 grid-flow-row"
                      style={{ gridAutoColumns: "auto" }}
                    >
                      <a href={product?.Link} className="btn w-full">
                        {product?.Title}
                      </a>
                    </div>
                  </li>
                </div>
              );
            }))}
            <div className="">
              <ProductAdd setRefresh={setRefresh}/>
            </div>
          </ul>
        </details>
      </>
    );
  }
  else{
    return (
      <>
        <details className="">
          <summary className="text-base mt-[4px] font-medium btn shadow-none border-0 bg-slate-100 hover:bg-violet-100 visited:bg-violet-100 text-slate-600">
            Product
          </summary>
          <ul className="w-56 z-10 bg-slate-100 flex flex-col" style={{marginTop:'24px'}}>
            {products.length > 0 && products.map((product: IContent) => {
              return (
                <li key={product.Id} className="flex-1 text-base font-medium shadow-none border-0 bg-transparent hover:bg-violet-100 text-slate-600">
                  <a href={product?.Link} className="hover:bg-violet-100">
                    {product?.Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </>
    );
  }
}
