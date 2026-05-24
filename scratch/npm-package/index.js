/**
 * QuantAlpha MARL Utility Library
 * Mathematical implementations for Deterministic Credit Assignment
 */

class QuantAlphaMARL {
  /**
   * Calculates reward credit assignment based on Provenance DAG structures
   * @param {Array<number>} rewards - Reward signals for each agent
   * @param {number} dampingFactor - Damping factor for decay
   * @returns {Array<number>} Credit scores
   */
  static calculateCreditAssignment(rewards, dampingFactor = 0.85) {
    if (!Array.isArray(rewards) || rewards.length === 0) return [];
    const total = rewards.reduce((sum, r) => sum + Math.abs(r), 0);
    if (total === 0) return rewards.map(() => 0);
    return rewards.map((r) => (r / total) * dampingFactor);
  }

  /**
   * Mock utility for GRPO policy gradient updates
   * @param {number} policyLoss - Current policy loss
   * @returns {number} Updated gradient step
   */
  static grpoUpdateRule(policyLoss) {
    const alpha = 0.001;
    return policyLoss * alpha;
  }
}

module.exports = QuantAlphaMARL;
