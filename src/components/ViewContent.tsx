import React from "react";

export const ViewContent = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="flex items-start gap-7">
            <img src="https://static.wikia.nocookie.net/herofanon/images/f/f3/3f80bb41847ae380ee21d797ddfc0823.jpg" className="w-80 max-w-xs" />
                    {
                        children
                    }
        </div>
    </>
}