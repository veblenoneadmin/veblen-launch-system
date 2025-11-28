import { useState } from 'react'

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  
  const [businessProfile, setBusinessProfile] = useState({
    businessName: '',
    industry: '',
    platforms: [],
    region: ''
  })
  
  const [researchData, setResearchData] = useState({
    pillars: [],
    hookBank: [],
    topicIdeas: [],
    painPoints: []
  })
  
  const [scripts, setScripts] = useState([])
  const [filmingGuide, setFilmingGuide] = useState({ filmingOrder: [], props: [], genericBRoll: [] })
  const [calendar, setCalendar] = useState([])
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [websiteData, setWebsiteData] = useState(null)
  const [isAnalyzingWebsite, setIsAnalyzingWebsite] = useState(false)

  const workflowSteps = [
    { id: 0, name: 'Business Profile', icon: '◉', description: 'Define your offer & audience' },
    { id: 1, name: 'Research', icon: '◎', description: 'Build pillars & hooks' },
    { id: 2, name: 'Scripts', icon: '◈', description: 'Create cue-card scripts' },
    { id: 3, name: 'Filming', icon: '◇', description: 'Shot lists & planning' },
    { id: 4, name: 'Calendar', icon: '◆', description: 'Posting schedule' },
    { id: 5, name: 'Export', icon: '◐', description: 'Download & launch' }
  ]

  const industries = ['Construction & Building', 'Trades & Services', 'Real Estate', 'Finance & Accounting', 'Hospitality & Food', 'Health & Fitness', 'Professional Services', 'E-commerce & Retail', 'Technology & SaaS', 'Education & Training', 'Other']
  const platforms = ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Facebook', 'LinkedIn']

  const generateMockWebsiteAnalysis = () => {
    setIsAnalyzingWebsite(true)
    setTimeout(() => {
      const mockData = {
        businessName: 'Demo Trailers',
        industry: 'Trades & Services',
        keyServices: ['Custom trailer builds', 'Tool storage systems', 'Finance packages'],
        painPoints: ['Tool damage from rattling', 'Rust near coast', 'Warranty fights'],
        contentThemes: ['Trailer setups', 'Organisation tips', 'Cost savings'],
        potentialHooks: ['Why your trailer costs you $200/week', 'The rust test 90% fail', 'Stop buying the biggest toolbox'],
        region: 'Gold Coast, QLD'
      }
      setWebsiteData(mockData)
      setBusinessProfile(prev => ({ ...prev, businessName: mockData.businessName, industry: mockData.industry, region: mockData.region }))
      setIsAnalyzingWebsite(false)
    }, 2000)
  }

  const generateMockResearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setResearchData({
        pillars: [
          { name: 'Buying Guidance', description: 'Help customers decide', subTopics: ['Price comparisons', 'Feature breakdowns', 'What to look for'] },
          { name: 'Maintenance', description: 'Keep trailers in top shape', subTopics: ['Rust prevention', 'Bearing checks', 'Cleaning tips'] },
          { name: 'Organisation', description: 'Maximise storage', subTopics: ['Drawer systems', 'Tool placement', 'Load distribution'] },
          { name: 'Finance & Tax', description: 'Make ownership affordable', subTopics: ['Tax write-offs', 'Finance options', 'ROI calculations'] },
          { name: 'Social Proof', description: 'Show real results', subTopics: ['Customer stories', 'Before/after', 'Testimonials'] }
        ],
        hookBank: [
          { hook: 'The 3 trailer upgrades that pay for themselves in 12 months', archetype: 'Big Outcome', cluster: 'Cost' },
          { hook: 'Stop buying the biggest toolbox until you fix this', archetype: 'Contrarian', cluster: 'Quality' },
          { hook: 'Most tradie trailers fail this simple rust test', archetype: 'Common Mistake', cluster: 'Risk' },
          { hook: 'Aluminium lasts longer right? Here is the 2-year road test', archetype: 'Myth vs Fact', cluster: 'Quality' },
          { hook: '5-point pre-delivery check that avoids warranty fights', archetype: 'Checklist', cluster: 'Risk' },
          { hook: 'From rattly mess to silent and organised in one morning', archetype: 'Before/After', cluster: 'Quality' },
          { hook: 'We lost a $6K job because of one sentence in our quote', archetype: 'Story', cluster: 'Cost' },
          { hook: 'I can get a cheaper trailer at Bunnings - here is the math', archetype: 'Objection Flip', cluster: 'Cost' },
          { hook: 'What happens if this breaks on the highway? Our fix plan', archetype: 'Risk Removal', cluster: 'Risk' },
          { hook: 'Every trailer ad says tough - here is how we prove it', archetype: 'Category POV', cluster: 'Quality' },
          { hook: 'The hidden cost that makes cheap trailers expensive', archetype: 'Contrarian', cluster: 'Cost' },
          { hook: 'Why coastal tradies need different trailer specs', archetype: 'Authority', cluster: 'Quality' },
          { hook: 'The legal payload limit getting QLD tradies fined', archetype: 'Common Mistake', cluster: 'Risk' },
          { hook: 'How one drawer system saved me 30 minutes every job', archetype: 'Story', cluster: 'Speed' },
          { hook: 'The tax write-off most tradies miss on their trailer', archetype: 'Big Outcome', cluster: 'Cost' }
        ],
        topicIdeas: [
          { title: '3 Upgrades That Pay For Themselves', hook: 'The 3 trailer upgrades that pay for themselves', scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 4, scoreEvergreen: 5 },
          { title: 'The Rust Test', hook: 'Most tradie trailers fail this rust test', scoreDemand: 4, scoreBenefit: 4, scoreEase: 5, scoreDiff: 5, scoreEvergreen: 5 },
          { title: 'Silent Drawer System Demo', hook: 'From rattly mess to silent and organised', scoreDemand: 5, scoreBenefit: 4, scoreEase: 5, scoreDiff: 4, scoreEvergreen: 4 },
          { title: 'Payload Fines Explained', hook: 'The legal payload limit getting tradies fined', scoreDemand: 4, scoreBenefit: 5, scoreEase: 3, scoreDiff: 4, scoreEvergreen: 5 },
          { title: 'EOFY Tax Write-Off Guide', hook: 'The tax write-off most tradies miss', scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 3, scoreEvergreen: 3 },
          { title: 'Big Box vs Custom - The Math', hook: 'I can get a cheaper trailer at Bunnings', scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 5, scoreEvergreen: 5 }
        ],
        painPoints: [
          { pain: 'My tools bounce around and break on rough roads', tag: 'Pain' },
          { pain: 'I am worried about rust living near the coast', tag: 'Risk' },
          { pain: 'Finance looks confusing', tag: 'Risk' },
          { pain: 'I cannot be off the road for 2 weeks waiting for repairs', tag: 'Pain' },
          { pain: 'I want my trailer to look professional', tag: 'Status' },
          { pain: 'The cheap trailer I bought is already falling apart', tag: 'Pain' }
        ]
      })
      setIsLoading(false)
    }, 2500)
  }

  const generateMockScripts = () => {
    setIsLoading(true)
    setTimeout(() => {
      setScripts([
        { id: 1, title: '3 Upgrades That Pay For Themselves', hook: 'The 3 trailer upgrades that pay for themselves in 12 months', setup: 'Most tradies spend money on their trailer once and never think about it again. But there are 3 specific upgrades that actually make you money back.', payoff: 'First, silent drawers - no more broken drill bits. Second, load scales - no more overweight fines. Third, proper tie-down systems. Each one saves you hundreds per year.', cta: 'Comment UPGRADE and I will send the ROI breakdown.', visualNotes: 'Start with messy trailer, transition to organised setup', duration: '35-40 sec', archetype: 'Educational', contentType: 'Authority' },
        { id: 2, title: 'The Rust Test', hook: 'Most tradie trailers fail this simple rust test near the beach', setup: 'If you are within 20km of the coast, your trailer is getting hammered by salt air every single day.', payoff: 'Here is the test - run your finger along the inside of the chassis rails. If you feel any roughness or see orange, it has already started.', cta: 'Want to know what coating actually works? Drop a comment.', visualNotes: 'Close-up of finger running along chassis, reveal rust spots', duration: '30-35 sec', archetype: 'Educational', contentType: 'Pain' },
        { id: 3, title: 'Silent Drawer System Demo', hook: 'From rattly mess to silent and organised in one morning', setup: 'You know that sound - every bump, every pothole, your tools crashing around. It is not just annoying, it is expensive.', payoff: 'Watch this. Full shake test, not a sound. These soft-close mechanisms cost about $200 extra but save you thousands in broken gear.', cta: 'DM SILENT for our drawer system specs.', visualNotes: 'Split screen: rattly drawer vs silent drawer shake test', duration: '35 sec', archetype: 'Authority', contentType: 'Proof' },
        { id: 4, title: 'Payload Fines Explained', hook: 'The legal payload limit that gets QLD tradies fined', setup: 'Quick quiz - do you know your trailer actual payload limit? Not the sticker, the real number after you add all your gear?', payoff: 'Your 2-tonne trailer probably has a 750kg payload. Add your toolboxes, that is down to 500kg. Fines start at $575.', cta: 'Comment PAYLOAD and I will send you the calculator we use.', visualNotes: 'Show weighbridge, calculator graphic breaking down weights', duration: '40 sec', archetype: 'Educational', contentType: 'Authority' },
        { id: 5, title: 'EOFY Tax Write-Off', hook: 'The tax write-off most tradies miss on their trailer', setup: 'EOFY is coming and there is one deduction that could save you thousands.', payoff: 'If you use your trailer more than 50% for work, you can claim instant asset write-off. On a $30K trailer, that is potentially $9K back.', cta: 'Link in bio for our EOFY guide.', visualNotes: 'Calendar showing EOFY deadline, calculator showing tax savings', duration: '35 sec', archetype: 'Educational', contentType: 'CTA' },
        { id: 6, title: 'Big Box vs Custom - The Real Math', hook: 'I can get a cheaper trailer at Bunnings - here is the 2-year math', setup: 'Yeah you can get a trailer for $2K at the big box store. Let us do the actual math.', payoff: 'Cheap trailer: $2K purchase, $800 in broken tools, $400 rust repairs. Quality trailer: $8K, zero repairs, resells for $5K. Actual cost: $3K.', cta: 'Comment MATH for the full breakdown.', visualNotes: 'Side by side comparison graphic, calculator breakdown', duration: '45 sec', archetype: 'Authority', contentType: 'Proof' }
      ])
      setIsLoading(false)
    }, 2000)
  }

  const generateMockFilmingGuide = () => {
    setIsLoading(true)
    setTimeout(() => {
      setFilmingGuide({
        filmingOrder: [
          { batch: 1, location: 'Workshop Interior', scripts: [1, 4], estimatedTime: '45 min' },
          { batch: 2, location: 'Outdoor Yard', scripts: [2, 5], estimatedTime: '45 min' },
          { batch: 3, location: 'Inside Trailer', scripts: [3, 6], estimatedTime: '30 min' },
          { batch: 4, location: 'Various', scripts: ['B-Roll'], estimatedTime: '30 min' }
        ],
        props: [
          { item: 'Drill bits (broken vs new)', purpose: 'Show tool damage' },
          { item: 'Weighbridge ticket', purpose: 'Payload demo' },
          { item: 'Rust samples', purpose: 'Coating comparison' },
          { item: 'Calculator/phone', purpose: 'Math breakdowns' }
        ],
        genericBRoll: ['Staff loading tools into drawers', 'Drone shot over trailer yard', 'Handshake with customer', 'Trailer being hitched to ute', 'Slow-mo drawer soft close', 'Wheels going over speed bump']
      })
      setIsLoading(false)
    }, 2000)
  }

  const generateMockCalendar = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCalendar([
        { week: 1, days: [
          { day: 'Monday', scriptTitle: 'The Rust Test', contentType: 'Pain', platforms: ['TikTok', 'Reels'], postingTime: '7:00 AM' },
          { day: 'Wednesday', scriptTitle: 'Silent Drawer Demo', contentType: 'Proof', platforms: ['TikTok', 'Reels'], postingTime: '12:00 PM' },
          { day: 'Friday', scriptTitle: '3 Upgrades ROI', contentType: 'Authority', platforms: ['Reels', 'LinkedIn'], postingTime: '6:00 PM' },
          { day: 'Sunday', scriptTitle: 'EOFY Tax Write-Off', contentType: 'CTA', platforms: ['Facebook', 'Reels'], postingTime: '10:00 AM' }
        ]},
        { week: 2, days: [
          { day: 'Monday', scriptTitle: 'Big Box vs Custom', contentType: 'Proof', platforms: ['TikTok', 'Reels'], postingTime: '7:00 AM' },
          { day: 'Wednesday', scriptTitle: 'Payload Fines', contentType: 'Authority', platforms: ['TikTok', 'Shorts'], postingTime: '12:00 PM' },
          { day: 'Friday', scriptTitle: '3 Upgrades (Cut 2)', contentType: 'Authority', platforms: ['Reels'], postingTime: '6:00 PM' },
          { day: 'Sunday', scriptTitle: 'Rust Test (Repost)', contentType: 'Pain', platforms: ['Facebook'], postingTime: '10:00 AM' }
        ]}
      ])
      setIsLoading(false)
    }, 1500)
  }

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center gap-3 py-8">
      <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
      <span className="text-white font-medium">Generating...</span>
    </div>
  )

  const StepIndicator = ({ step, isActive, isComplete }) => (
    <div onClick={() => setCurrentStep(step.id)} className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${isActive ? 'bg-orange-500/10 border border-orange-500' : isComplete ? 'bg-neutral-900 border border-neutral-700' : 'bg-neutral-900/50 border border-neutral-800'}`}>
      <span className={`text-2xl ${isActive ? 'text-orange-500' : isComplete ? 'text-green-500' : 'text-neutral-600'}`}>{isComplete && !isActive ? '✓' : step.icon}</span>
      <div className="flex-1 min-w-0">
        <div className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-neutral-400'}`}>{step.name}</div>
        <div className="text-xs text-neutral-500 truncate">{step.description}</div>
      </div>
    </div>
  )

  const renderBusinessProfile = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6">
        <h2 className="text-3xl font-bold text-orange-500">Business Profile</h2>
        <p className="text-neutral-400 mt-2">Define your offer and audience</p>
      </div>
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-center gap-4">
        <span className="text-2xl">🎮</span>
        <div><h3 className="font-bold text-orange-500">Demo Mode</h3><p className="text-neutral-400 text-sm">Click Analyze Site to see mock AI responses</p></div>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">🌐</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">Quick Start: Analyze Website</h3>
            <p className="text-neutral-400 text-sm mb-4">Enter any URL - demo generates mock data</p>
            <div className="flex gap-3 flex-wrap">
              <input type="text" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} placeholder="https://example.com" className="flex-1 min-w-[200px] bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none" />
              <button onClick={generateMockWebsiteAnalysis} disabled={isAnalyzingWebsite} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 disabled:opacity-50">{isAnalyzingWebsite ? 'Analyzing...' : '⚡ Analyze Site'}</button>
            </div>
          </div>
        </div>
        {websiteData && (
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <h4 className="font-bold text-orange-500 mb-4">✓ Analysis Complete</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">Services</span><div className="mt-2 flex flex-wrap gap-1">{websiteData.keyServices?.map((s, i) => <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs">{s}</span>)}</div></div>
              <div className="bg-black rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">Pain Points</span><div className="mt-2 flex flex-wrap gap-1">{websiteData.painPoints?.map((p, i) => <span key={i} className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">{p}</span>)}</div></div>
              <div className="bg-black rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">Content Themes</span><div className="mt-2 flex flex-wrap gap-1">{websiteData.contentThemes?.map((t, i) => <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{t}</span>)}</div></div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Business Identity</h3>
          <input type="text" value={businessProfile.businessName} onChange={(e) => setBusinessProfile(prev => ({ ...prev, businessName: e.target.value }))} placeholder="Business Name" className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none" />
          <select value={businessProfile.industry} onChange={(e) => setBusinessProfile(prev => ({ ...prev, industry: e.target.value }))} className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"><option value="">Select Industry...</option>{industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}</select>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Platforms</h3>
          <div className="flex flex-wrap gap-2">{platforms.map(platform => <button key={platform} onClick={() => setBusinessProfile(prev => ({ ...prev, platforms: prev.platforms.includes(platform) ? prev.platforms.filter(p => p !== platform) : [...prev.platforms, platform] }))} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${businessProfile.platforms.includes(platform) ? 'bg-orange-500 text-black' : 'bg-neutral-900 text-neutral-400'}`}>{platform}</button>)}</div>
        </div>
      </div>
      <div className="flex justify-end pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(1)} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400">Continue to Research →</button></div>
    </div>
  )

  const renderResearch = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div><h2 className="text-3xl font-bold text-orange-500">Research Engine</h2><p className="text-neutral-400 mt-2">Build pillars, hooks and topics</p></div>
        <button onClick={generateMockResearch} disabled={isLoading} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 disabled:opacity-50">{isLoading ? 'Generating...' : '⚡ Generate Research'}</button>
      </div>
      {isLoading ? <LoadingSpinner /> : researchData.pillars.length > 0 ? (
        <div className="space-y-8">
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">Content Pillars</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{researchData.pillars.map((pillar, idx) => <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"><h4 className="font-bold text-white text-lg mb-2">{pillar.name}</h4><p className="text-neutral-400 text-sm mb-3">{pillar.description}</p><div className="flex flex-wrap gap-2">{pillar.subTopics?.map((topic, i) => <span key={i} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">{topic}</span>)}</div></div>)}</div></div>
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">Hook Bank ({researchData.hookBank.length} hooks)</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto">{researchData.hookBank.map((hook, idx) => <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4"><p className="text-white font-medium mb-2">&quot;{hook.hook}&quot;</p><div className="flex gap-2"><span className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs">{hook.archetype}</span><span className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs">{hook.cluster}</span></div></div>)}</div></div>
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">Pain Points</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{researchData.painPoints.map((pain, idx) => <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4"><p className="text-white text-sm mb-2">&quot;{pain.pain}&quot;</p><span className={`px-2 py-1 rounded text-xs ${pain.tag === 'Pain' ? 'bg-red-500/20 text-red-400' : pain.tag === 'Risk' ? 'bg-orange-500/20 text-orange-500' : 'bg-purple-500/20 text-purple-400'}`}>{pain.tag}</span></div>)}</div></div>
        </div>
      ) : <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl"><div className="text-6xl mb-4">🔬</div><h3 className="text-xl font-bold text-white mb-2">No Research Yet</h3><p className="text-neutral-500">Click Generate Research to build pillars and hooks.</p></div>}
      <div className="flex justify-between pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(0)} className="px-6 py-3 bg-neutral-900 text-neutral-300 rounded-lg">← Back</button><button onClick={() => setCurrentStep(2)} disabled={researchData.topicIdeas.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">Continue to Scripts →</button></div>
    </div>
  )

  const renderScripts = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div><h2 className="text-3xl font-bold text-orange-500">Script Writing</h2><p className="text-neutral-400 mt-2">Create cue-card scripts</p></div>
        <button onClick={generateMockScripts} disabled={isLoading} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">{isLoading ? 'Generating...' : '✍️ Generate Scripts'}</button>
      </div>
      {isLoading ? <LoadingSpinner /> : scripts.length > 0 ? (
        <div className="space-y-4">{scripts.map((script) => <div key={script.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"><div className="bg-neutral-800/50 px-5 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">{script.id}</span><h4 className="font-bold text-white">{script.title}</h4></div><span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">{script.archetype}</span></div><div className="p-5 space-y-4"><div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"><span className="text-xs text-orange-500 uppercase">Hook</span><p className="text-white font-bold text-lg mt-1">&quot;{script.hook}&quot;</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div className="bg-neutral-800/50 rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">Setup</span><p className="text-neutral-300 text-sm mt-1">{script.setup}</p></div><div className="bg-neutral-800/50 rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">Payoff</span><p className="text-neutral-300 text-sm mt-1">{script.payoff}</p></div><div className="bg-neutral-800/50 rounded-lg p-4"><span className="text-xs text-neutral-500 uppercase">CTA</span><p className="text-neutral-300 text-sm mt-1">{script.cta}</p></div></div></div></div>)}</div>
      ) : <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl"><div className="text-6xl mb-4">📝</div><h3 className="text-xl font-bold text-white mb-2">No Scripts Yet</h3><p className="text-neutral-500">Click Generate Scripts to create cue-card scripts.</p></div>}
      <div className="flex justify-between pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(1)} className="px-6 py-3 bg-neutral-900 text-neutral-300 rounded-lg">← Back</button><button onClick={() => setCurrentStep(3)} disabled={scripts.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">Continue to Filming →</button></div>
    </div>
  )

  const renderFilming = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div><h2 className="text-3xl font-bold text-orange-500">Filming Guide</h2><p className="text-neutral-400 mt-2">Shot lists and filming order</p></div>
        <button onClick={generateMockFilmingGuide} disabled={isLoading || scripts.length === 0} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">{isLoading ? 'Generating...' : '🎬 Generate Guide'}</button>
      </div>
      {isLoading ? <LoadingSpinner /> : filmingGuide.filmingOrder?.length > 0 ? (
        <div className="space-y-8">
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">📋 Filming Order</h3><div className="space-y-3">{filmingGuide.filmingOrder.map((batch, idx) => <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-lg">{batch.batch}</div><div className="flex-1"><h4 className="font-bold text-white">{batch.location}</h4><p className="text-neutral-400 text-sm">Scripts: {Array.isArray(batch.scripts) ? batch.scripts.join(', ') : batch.scripts}</p></div><span className="px-4 py-2 bg-neutral-800 rounded-lg text-neutral-300 text-sm">{batch.estimatedTime}</span></div>)}</div></div>
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">🎯 Props Checklist</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{filmingGuide.props?.map((prop, idx) => <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex items-start gap-3"><span className="text-xl">☐</span><div><h4 className="font-medium text-white">{prop.item}</h4><p className="text-neutral-500 text-sm">{prop.purpose}</p></div></div>)}</div></div>
          <div><h3 className="text-xl font-bold text-orange-500 mb-4">🎥 B-Roll Shots</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-2">{filmingGuide.genericBRoll?.map((shot, idx) => <div key={idx} className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3"><span className="text-orange-500">▶</span><span className="text-neutral-300 text-sm">{shot}</span></div>)}</div></div>
        </div>
      ) : <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl"><div className="text-6xl mb-4">🎬</div><h3 className="text-xl font-bold text-white mb-2">No Filming Guide Yet</h3><p className="text-neutral-500">Generate scripts first, then click Generate Guide.</p></div>}
      <div className="flex justify-between pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(2)} className="px-6 py-3 bg-neutral-900 text-neutral-300 rounded-lg">← Back</button><button onClick={() => setCurrentStep(4)} disabled={filmingGuide.filmingOrder?.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">Continue to Calendar →</button></div>
    </div>
  )

  const renderCalendar = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div><h2 className="text-3xl font-bold text-orange-500">Content Calendar</h2><p className="text-neutral-400 mt-2">4-week posting schedule</p></div>
        <button onClick={generateMockCalendar} disabled={isLoading || scripts.length === 0} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">{isLoading ? 'Generating...' : '📅 Generate Calendar'}</button>
      </div>
      {isLoading ? <LoadingSpinner /> : calendar.length > 0 ? (
        <div className="space-y-6">{calendar.map((week) => <div key={week.week} className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden"><div className="bg-neutral-800/50 px-5 py-3"><h3 className="font-bold text-orange-500">Week {week.week}</h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">{week.days?.map((day, idx) => <div key={idx} className="bg-neutral-950 p-4 space-y-3"><div className="flex items-center justify-between"><span className="font-bold text-white">{day.day}</span><span className="text-neutral-500 text-xs">{day.postingTime}</span></div><div className={`rounded-lg p-3 border ${day.contentType === 'Pain' ? 'bg-red-500/10 border-red-500/30' : day.contentType === 'Authority' ? 'bg-blue-500/10 border-blue-500/30' : day.contentType === 'Proof' ? 'bg-purple-500/10 border-purple-500/30' : 'bg-green-500/10 border-green-500/30'}`}><span className="text-xs text-neutral-400 uppercase">{day.contentType}</span><p className="text-white font-medium text-sm mt-1">{day.scriptTitle}</p></div><div className="flex flex-wrap gap-1">{day.platforms?.map(p => <span key={p} className="px-2 py-1 bg-neutral-900 rounded text-xs text-neutral-400">{p}</span>)}</div></div>)}</div></div>)}</div>
      ) : <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl"><div className="text-6xl mb-4">📅</div><h3 className="text-xl font-bold text-white mb-2">No Calendar Yet</h3><p className="text-neutral-500">Click Generate Calendar to create your schedule.</p></div>}
      <div className="flex justify-between pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(3)} className="px-6 py-3 bg-neutral-900 text-neutral-300 rounded-lg">← Back</button><button onClick={() => setCurrentStep(5)} disabled={calendar.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg disabled:opacity-50">Continue to Export →</button></div>
    </div>
  )

  const renderExport = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6"><h2 className="text-3xl font-bold text-orange-500">Export & Launch</h2><p className="text-neutral-400 mt-2">Download your content pack</p></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-orange-500">{researchData.hookBank.length}</div><div className="text-neutral-400 text-sm mt-1">Hooks</div></div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-white">{researchData.topicIdeas.length}</div><div className="text-neutral-400 text-sm mt-1">Topics</div></div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-white">{scripts.length}</div><div className="text-neutral-400 text-sm mt-1">Scripts</div></div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-orange-500">{calendar.length * 4}</div><div className="text-neutral-400 text-sm mt-1">Posts</div></div>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-orange-500 mb-4">📦 Export</h3>
        <button onClick={() => { const data = { businessProfile, websiteData, researchData, scripts, filmingGuide, calendar }; const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'veblen-launch-export.json'; a.click(); }} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400">Download JSON Export</button>
      </div>
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6"><h3 className="text-xl font-bold text-green-400 mb-2">🎉 Demo Complete!</h3><p className="text-neutral-300">You have experienced the full Veblen Launch workflow.</p></div>
      <div className="flex justify-start pt-6 border-t border-neutral-800"><button onClick={() => setCurrentStep(4)} className="px-6 py-3 bg-neutral-900 text-neutral-300 rounded-lg">← Back</button></div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderBusinessProfile()
      case 1: return renderResearch()
      case 2: return renderScripts()
      case 3: return renderFilming()
      case 4: return renderCalendar()
      case 5: return renderExport()
      default: return renderBusinessProfile()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        <aside className={`${showSidebar ? 'w-72' : 'w-0'} flex-shrink-0 bg-neutral-950 border-r border-neutral-800 transition-all overflow-hidden`}>
          <div className="p-6">
            <div className="mb-8"><h1 className="text-2xl font-black"><span className="text-orange-500">VEBLEN</span><span className="text-neutral-500 font-light ml-2">Launch</span></h1><p className="text-neutral-500 text-xs mt-1">Demo Mode</p></div>
            <div className="space-y-2">{workflowSteps.map((step) => <StepIndicator key={step.id} step={step} isActive={currentStep === step.id} isComplete={(step.id === 0 && businessProfile.businessName) || (step.id === 1 && researchData.hookBank.length > 0) || (step.id === 2 && scripts.length > 0) || (step.id === 3 && filmingGuide.filmingOrder?.length > 0) || (step.id === 4 && calendar.length > 0)} />)}</div>
          </div>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => setShowSidebar(!showSidebar)} className="mb-6 lg:hidden px-4 py-2 bg-neutral-900 rounded-lg text-neutral-400">{showSidebar ? '← Hide' : '☰ Menu'}</button>
            {renderCurrentStep()}
          </div>
        </main>
      </div>
    </div>
  )
}
