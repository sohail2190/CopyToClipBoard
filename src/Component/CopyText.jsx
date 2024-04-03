import React, { useState } from 'react';

const CopyClipBoard = () => {
    const [textToCopy, setTextToCopy] = useState('');

    const copyText = () => {
        if (!textToCopy) {
            alert("Please enter some text to copy.");
            return;
        } 
        setTextToCopy('')

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Copied successfully!');
            })
            .catch(err => {
                console.error('Unable to copy:', err);
                alert('Failed to copy text. Please try again.');
            });
    };

    return (
            
                <div className="copy-text">
                    <section className='copy-text'>
                        <h1>Copy To Clipboard Example</h1>
                        <textarea
                            value={textToCopy}
                            onChange={(e) => setTextToCopy(e.target.value)}
                            placeholder="Enter text to copy..."
                        ></textarea>
                        <button onClick={copyText}>Copy</button><br></br>
                        <h4>Paste Here</h4>
                        <textarea placeholder="Paste here"></textarea>
                    </section>
                </div>
    );
};

export default CopyClipBoard;
