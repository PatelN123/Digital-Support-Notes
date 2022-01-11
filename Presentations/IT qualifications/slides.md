---
theme: seriph
background: "https://cdn.notes.nayanpatel.net/presentation-back.png"
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
# persist drawings in exports and build
drawings:
  persist: false
---

# 10 Entry level IT certifications

By [Nayan](https://nayanpatel.net)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Next slide... <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/PatelN123/Digital-Support-Notes/tree/main/Presentations" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

# CompTIA A+ <Description />


Also known as: Computing Technology Industry Association (CompTIA) A+ Certification <br />

<div class="grid grid-cols-1">

Research by indeed shows:
- 67% of job seekers said "help my career progression" was the biggest reason for earning this qualification
- 63% said earning this qualification helped them make more money
- 62% said earningthis qualification helped them get a job
- 93% said they would recommend a family member or friend earn this qualification

This qulification includes Hardware, Networking, Software troubleshooting, Operating systems, and more!
<br>

</div>

<style>
h1 {
}
  
.slidev-layout {
    height: 100%;
    font-size: 1.1rem;
    line-height: 1;
    padding: 2.5rem 3.5rem;
    background: #000;
}
  
.slidev-layout li {
    line-height: 1.8em;
    margin-left: 1.1em;
    padding-left: .2em;
    color: #9f9f9f;
}

.slidev-layout h1+p {
    margin-top: -.5rem;
    margin-bottom: 1rem;
    opacity: .5;
    color: #fff;
}
  
.slidev-layout p {
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #7e93a9;
}
</style>

---

# Threats to systems and data <MarkerCore />

If a user falls for a malicious trick, there are many security vulnerabilities that could be at risk. <br>

Here are some system and data threats...

<div class="grid grid-cols-2 gap-x-2"><div>

<div v-click>

### 👷 Social Engineering

- Occurs when an employee inside the company is tricked into revealing information. Employees would be manipulated to give out passwords or other confidential information. 
- Can take the form of attackers impersonating friends or other trusted sources. 

</div>

<div v-click>

### 🦠 Virus

- Designed to copy and attach itself to applications on your computer and spread through server files onto other workstations within the workplace. 
- This can result in a loss of company data. 

</div>


</div><div>

<div v-click>

### 🪱 Worms

- Comes in the form of an email, text, message, they usually contain a suspicious link and when clicked, it'll prompt your for information.
- This can also result in a loss of data and denied access to systems.

</div>

<div v-click>

### 🕵️ Spyware

- Usually comes in the form of a popup and prompts you to install applications or download files
- From there, the application keeps track of your keystrokes, reads and deletes files and has full control over your machine.

</div>
</div></div>


---

# Response to suspected phishing <MarkerPattern />

Step by step guide on how to respond to phishing.

<div v-click>

#### Step 1
##### **Identification**
- The first step in responding to a phishing attack is to identify the sender and check the email address 
<br> against the intended senders' email address.
- Check the email for suspicious files. 

</div>

<br>

<div v-click>

#### Step 2
##### **Triage**
- If step one passes, and you discover that this could be an actual phishing attack
  - Try to determine the severity of this attack, then notify the IT department of this. 

</div>

<br>

<div v-click>

#### Following steps
- The following steps, such as Investigation, Remediation and Risk avoidance will be done by the IT department. 

</div>


<style>

  .slidev-vclick-target {
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
    -o-transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-duration: .1s;
    -o-transition-duration: .1s;
    transition-duration: .1s;
    box-shadow: rgb(236 72 153 / 34%) 0px 0px 0px 3px;
    border-radius: 10px;
    padding: 10px;
    background-color: #1b1b1b;
    width: max-content;
  }

</style>

---

# General best practices <Tips />

Here are some general best practices to avoid cyber attack:

<div>

<div v-click>

### 🔒 Secure websites

- Only view secure website, but take extra caution if you need to view an insecure website.

</div>

<br>

<div v-click>

### 📮 Email sender

- Check the email sender against who should be sending the email

</div>

<br>

<div>

<div v-click>

### 🎭 Unknown apps

- Avoid installing apps from unknown sources. 

</div>

<br>

<div v-click>

### ⌨️ Secure passwords

- Ensure you use long passwords and include special characters. 
- Don't write your password down, or store it anywhere insecure. 

</div>
</div></div>

<style>

  .slidev-vclick-target {
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
    -o-transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-duration: .1s;
    -o-transition-duration: .1s;
    transition-duration: .1s;
    box-shadow: #5690d957 0px 0px 0px 3px;
    border-radius: 10px;
    padding: 10px;
    background-color: #1b1b1b;
    width: max-content;
  }

</style>
