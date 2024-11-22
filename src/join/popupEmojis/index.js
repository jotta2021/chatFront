import React from 'react';

// import { Container } from './styles';

function PopupEmojis({setMessage,message}) {
    const emojiList = [
        { name: "Grinning Face", emoji: "😀", unicode: "U+1F600" },
        { name: "Face with Tears of Joy", emoji: "😂", unicode: "U+1F602" },
        { name: "Red Heart", emoji: "❤️", unicode: "U+2764" },
        { name: "Heart Eyes", emoji: "😍", unicode: "U+1F60D" },
        { name: "Smiling Face with Sunglasses", emoji: "😎", unicode: "U+1F60E" },
        { name: "Crying Face", emoji: "😢", unicode: "U+1F622" },
        { name: "Loudly Crying Face", emoji: "😭", unicode: "U+1F62D" },
        { name: "Thinking Face", emoji: "🤔", unicode: "U+1F914" },
        { name: "Face with Stuck-Out Tongue and Winking Eye", emoji: "😜", unicode: "U+1F61C" },
        { name: "Folded Hands", emoji: "🙏", unicode: "U+1F64F" },
        { name: "Flexed Biceps", emoji: "💪", unicode: "U+1F4AA" },
        { name: "Tada (Party Popper)", emoji: "🎉", unicode: "U+1F389" },
        { name: "Skull", emoji: "💀", unicode: "U+1F480" },
        { name: "Hugging Face", emoji: "🤗", unicode: "U+1F917" },
        { name: "Pleading Face", emoji: "🥺", unicode: "U+1F97A" },
        { name: "Smiling Face with Halo", emoji: "😇", unicode: "U+1F607" },
        { name: "Exploding Head", emoji: "🤯", unicode: "U+1F92F" },
        { name: "Cat Face", emoji: "🐱", unicode: "U+1F431" },
        { name: "Dog Face", emoji: "🐶", unicode: "U+1F436" },
        { name: "Monkey Face", emoji: "🐵", unicode: "U+1F435" },
        { name: "Fire", emoji: "🔥", unicode: "U+1F525" },
        { name: "Sparkles", emoji: "✨", unicode: "U+2728" },
        { name: "Winking Face", emoji: "😉", unicode: "U+1F609" },
        { name: "Face with Medical Mask", emoji: "😷", unicode: "U+1F637" },
        { name: "Star-Struck", emoji: "🤩", unicode: "U+1F929" },
        { name: "Face with Monocle", emoji: "🧐", unicode: "U+1F9D0" },
        { name: "Nerd Face", emoji: "🤓", unicode: "U+1F913" },
        { name: "Smirking Face", emoji: "😏", unicode: "U+1F60F" },
        { name: "Unamused Face", emoji: "😒", unicode: "U+1F612" },
        { name: "Relieved Face", emoji: "😌", unicode: "U+1F60C" },
        { name: "Face with Rolling Eyes", emoji: "🙄", unicode: "U+1F644" },
        { name: "Face with Raised Eyebrow", emoji: "🤨", unicode: "U+1F928" },
        { name: "Face with Hand Over Mouth", emoji: "🤭", unicode: "U+1F92D" },
        { name: "Zipper-Mouth Face", emoji: "🤐", unicode: "U+1F910" },
        { name: "Shushing Face", emoji: "🤫", unicode: "U+1F92B" },
        { name: "Sleeping Face", emoji: "😴", unicode: "U+1F634" },
        { name: "Thinking Face", emoji: "🤔", unicode: "U+1F914" },
        { name: "Upwards Button", emoji: "🔼", unicode: "U+1F53C" },
        { name: "Downwards Button", emoji: "🔽", unicode: "U+1F53D" },
        { name: "Thumbs Up", emoji: "👍", unicode: "U+1F44D" },
        { name: "Thumbs Down", emoji: "👎", unicode: "U+1F44E" },
        { name: "Clapping Hands", emoji: "👏", unicode: "U+1F44F" },
        { name: "Raised Fist", emoji: "✊", unicode: "U+270A" },
        { name: "Victory Hand", emoji: "✌️", unicode: "U+270C" },
        { name: "Facepalm", emoji: "🤦‍♂️", unicode: "U+1F926" },
        { name: "Person Shrugging", emoji: "🤷‍♂️", unicode: "U+1F937" },
        { name: "Person Running", emoji: "🏃‍♂️", unicode: "U+1F3C3" },
        { name: "Dancer", emoji: "💃", unicode: "U+1F483" },
        { name: "Man Dancing", emoji: "🕺", unicode: "U+1F57A" },
        { name: "Muscle", emoji: "💪", unicode: "U+1F4AA" },
        { name: "Trophy", emoji: "🏆", unicode: "U+1F3C6" },
        { name: "Globe", emoji: "🌍", unicode: "U+1F30D" },
        { name: "Rocket", emoji: "🚀", unicode: "U+1F680" },
        { name: "Loudspeaker", emoji: "📢", unicode: "U+1F4E2" },
        { name: "Battery", emoji: "🔋", unicode: "U+1F50B" },
        { name: "Electric Plug", emoji: "🔌", unicode: "U+1F50C" },
        { name: "Lightbulb", emoji: "💡", unicode: "U+1F4A1" },
        { name: "Sun", emoji: "☀️", unicode: "U+2600" },
        { name: "Cloud", emoji: "☁️", unicode: "U+2601" },
        { name: "Snowflake", emoji: "❄️", unicode: "U+2744" },
        { name: "Rainbow", emoji: "🌈", unicode: "U+1F308" }
      ];
  return (
    <div className=' w-full flex  flex-wrap transition-all'>
{
    emojiList.map((item)=> (
        <div key={item.unicode} onClick={()=> setMessage((message)=>message+ item.emoji)}>
            <span className='text-[1.4rem] cursor-pointer '
            >{item.emoji}</span>
        </div>
    ))
}
    </div>
  )
}

export default PopupEmojis;