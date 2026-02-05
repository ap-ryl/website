export function ConsoleSection() {
  return (
    <section className="px-6 pt-8 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Window */}
        <div className="terminal bg-[#0c0c0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600" />
              <div className="w-3 h-3 rounded-full bg-gray-600" />
              <div className="w-3 h-3 rounded-full bg-gray-600" />
            </div>
            <span className="text-xs text-gray-500 font-mono">
              apryl — bash
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
              Coming Soon
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-4">
            {/* First command */}
            <div>
              <div className="text-gray-300">
                <span className="text-gray-500">$</span> apryl plan
              </div>
            </div>

            {/* Output lines */}
            <div className="space-y-2 text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">✦</span>
                <span>Analyzing infrastructure state...</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Detected drift in us-east-1 VPC configuration.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Suggested fix: Update security group ingress rules for port 443.</span>
              </div>
            </div>

            {/* Second command */}
            <div className="pt-2">
              <div className="text-gray-300">
                <span className="text-gray-500">$</span> apryl apply --auto-fix
              </div>
            </div>

            {/* Second output */}
            <div className="space-y-2 text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">🔧</span>
                <span>Applying intelligent fixes...</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Security Group sg-0821 updated successfully.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Resource reconciliation complete. 1 changed, 0 added, 0 destroyed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
